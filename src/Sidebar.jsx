import React from 'react';
import { Button } from "@mui/material";
import './css/sidebar.css';
import Sidebaroptions from './Sidebaroptions';
import { Add, Delete, Drafts, ExpandMore, FindInPage, Inbox, Keyboard, Label, LabelImportant, Send, Star, Videocam, WatchLater } from '@mui/icons-material';

function Sidebar () {
    return(
        <div className="sidebar">
            <Button startIcon={<Add></Add>} className="composer__btn"> Composer </Button>

            <Sidebaroptions Icon={Inbox} title="Inbox" number="224" isactive={true} />
            <Sidebaroptions Icon={Star} title="Starred" number="224" />
            <Sidebaroptions Icon={WatchLater} title="Snoozed" number="224" />
            <Sidebaroptions Icon={LabelImportant} title="Important" number="224" />
            <Sidebaroptions Icon={Send} title="Sent" number="226" />
            <Sidebaroptions Icon={Drafts} title="Drafts" number="224" />
            <Sidebaroptions Icon={Label} title="Category" number="224" />
            <Sidebaroptions Icon={Delete} title="[Map]/Trash" number="224" />
            <Sidebaroptions Icon={FindInPage} title="Documents" number="224" />
            <Sidebaroptions Icon={ExpandMore} title="More" number="224" />
            <hr />
            <h3 className="sidebarOptions__heading">Meet</h3>
            <Sidebaroptions Icon={Videocam} title={"New meeting"} />
            <Sidebaroptions Icon={Keyboard} title={"Join a meeting"} />
        </div>
    )
}

export default Sidebar;