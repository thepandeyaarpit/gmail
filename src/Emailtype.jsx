import React from 'react';
import { Inbox, LocalOffer, People } from '@mui/icons-material';
import './css/emaillist.css';

const Emailtype = () => {
  return (
    <div className='emailtype'>
        <div className='emailtype__options emailtype__options--active'>
            <Inbox />
            <p>Primary</p>
        </div>

        <div className='emailtype__options'>
            <People />
            <p>Social</p>
        </div>

        <div className='emailtype__options'>
            <LocalOffer />
            <p>Promotions</p>
        </div>
    </div>
  )
}

export default Emailtype;