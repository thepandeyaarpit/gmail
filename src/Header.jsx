import React from 'react';
import {Reorder, Search, HelpOutline, Setting, Apps, ExpandMore } from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/icons-material';
import './css/header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Reorder></Reorder>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="logo"/>
            </div>
            <div className="header__middle">
                <div className="search_mail">
                    <IconButton>
                        <Search></Search>
                    </IconButton>
                    <input type="text" placeholder="" />
                    <IconButton>
                        <ExpandMore></ExpandMore>
                    </IconButton>
                </div>
            </div>
            <div className="header__right">
                <IconButton>
                    <HelpOutline></HelpOutline>
                </IconButton>
                <IconButton>
                    <Setting></Setting>
                </IconButton>
                <IconButton>
                    <Apps></Apps>
                </IconButton>
                <Avatar></Avatar>
            </div>
        </div>
    )
}

export default Header;