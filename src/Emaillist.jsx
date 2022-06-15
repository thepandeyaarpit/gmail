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
        <Emailbody />/
    </div>
  )
}

export default Emaillist;