import { CheckBoxOutlineBlank, StarBorder, LabelOutlined } from '@mui/icons-material';
import React from 'react';
import './css/emaillist.css';

const Emailbody = (props) => {
  return (
    <div className='emailbody'>
        <div className='emailbody_left'>
            <CheckBoxOutlineBlank />
            <StarBorder />
            <LabelOutlined />


            <h4>{props.name}</h4>
        </div>
        <div className='emailbody_middle'>
            <div className='emailbody_middle_msg'>
                <p><b>{props.subject}</b>{props.message}</p>
            </div>
        </div>
        <div className='emailbody_right'>
            <p>{props.time}</p>
        </div>
    </div>
  )
}

export default Emailbody