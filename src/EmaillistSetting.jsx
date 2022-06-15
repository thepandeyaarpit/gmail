import React from 'react';
import './css/emaillist.css';
import { ArrowDropDown, CheckBoxOutlineBlank, ChevronLeft, ChevronRight, MoreVert, Refresh } from '@mui/icons-material';
import { IconButton } from '@mui/material';


function EmaillistSetting () {
    return(
        <div className="emaillist__setting">
            <div className="emaillist__settingLeft">
                <IconButton>
                    <CheckBoxOutlineBlank />
                </IconButton>
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <Refresh />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                {/* <IconButtonButton></IconButtonButton> */}
            </div>
            <div className="emaillist__settingRight">
                <p>1-50 of 10256</p>
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>
            </div>
        </div>
    )
}

export default EmaillistSetting;