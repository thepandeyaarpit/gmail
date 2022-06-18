import React from 'react';
import './css/compose.css';
import { ArrowDropDown, AttachFile, Close, Create, Delete, FormatColorText, Height, InsertEmoticon, Link, MoreVert, NoteAdd, PhonelinkLock, Photo, Remove } from '@mui/icons-material';
// import { Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';



function Compose() {

    const dispatch = useDispatch();

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
            <div className="compose_body">
                <div className="compose__body__form">
                    <input type="email" placeholder="Reciepents" />
                    <input type="text" placeholder="Subject" />
                    <textarea rows="20"></textarea>
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
        </div>
    )
}

export default Compose;