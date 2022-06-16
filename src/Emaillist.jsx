import React from 'react';
import './css/emaillist.css';
import Emailbody from './Emailbody';
import EmaillistSetting from './EmaillistSetting';
import Emailtype from './Emailtype';

const Emaillist = () => {
  return (
    <div className="emaillist">
        <EmaillistSetting />
        <Emailtype />
        <Emailbody name="Arpit Pandeya" subject="This is a message" message="learning react js" time="2.30AM" />
    </div>
  )
}

export default Emaillist;