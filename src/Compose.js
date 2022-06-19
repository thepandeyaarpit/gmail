import React, { useState } from 'react';
import './css/compose.css';
import { ArrowDropDown, AttachFile, Close, Create, Delete, FormatColorText, Height, InsertEmoticon, Link, MoreVert, NoteAdd, PhonelinkLock, Photo, Remove } from '@mui/icons-material';
// import { Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';


function Compose() {

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault();
        // alert(`Name is ${to}. Subject is ${subject}. Message is ${message}. `);
        if(to==""){
            return alert("To is Required");
        }if(subject==""){
            return alert("Subject is Required");
        }if(message==""){
            return alert("Message is Required");
        }
        db.collection("email").add({
            to,
            subject,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("Email send successfully");
    }
    
    return(
        <div className="compose">
            <div className="compose_header">
                <div className="compose_header__left">
                    <span>New Message</span>
                </div>
                <div className="compose_header__right">
                    <Remove />
                    <Height />
                    <Close onClick={()=>dispatch(closeSendMessage())} />
                </div>
            </div>
            <form onSubmit={formSubmit}>
            <div className="compose_body">
                <div className="compose__body__form">
                    <input type="email" placeholder="Reciepents" value={to} onChange={(e)=>setTo(e.target.value)} />
                    <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} />
                    <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
                </div>
            </div>
            <div className="compose_footer">
                <div className="compose_footer_left">
                    <button type="submit">Send
                        <ArrowDropDown />
                    </button>
                </div>
                <div className="compose_footer_right">
                    <FormatColorText />
                    <Link />
                    <AttachFile />
                    <InsertEmoticon />
                    <NoteAdd />
                    <Photo />
                    <PhonelinkLock />
                    <Create />
                    <MoreVert />
                    <Delete />
                </div>
            </div>
            </form>
        </div>
    )
}

export default Compose;