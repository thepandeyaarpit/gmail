import { CheckBoxOutlineBlank, StarBorder, LabelOutlined } from '@mui/icons-material';
import React from 'react';
import './css/emaillist.css';

const Emailbody = () => {
  return (
    <div className='emailbody'>
        <div className='emailbody_left'>
            <CheckBoxOutlineBlank />
            <StarBorder />
            <LabelOutlined />


            <h4>Arpit Pandeya</h4>
        </div>
        <div className='emailbody_middle'>
            <div className='emailbody_middle_msg'>
                <p><b>Subject</b>This is Message body</p>
            </div>
        </div>
        <div className='emailbody_right'>
            <p>2:30 PM</p>
        </div>
    </div>
  )
}

export default Emailbody