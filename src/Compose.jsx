import React from 'react';
import './css/compose.css';
import { Close, Height, Remove } from '@mui/icons-material';


function Compose() {
    return(
        <div className="compose">
            <div className="compose_header">
                <div className="compose_header__left">
                    <span>New Message</span>
                </div>
                <div className="compose_header__right">
                    <Remove />
                    <Height />
                    <Close />
                </div>
            </div>
            <div className="compose_body"></div>
            <div className="compose_footer"></div>
        </div>
    )
}

export default Compose;