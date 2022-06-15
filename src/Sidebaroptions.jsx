import React from 'react';
import './css/sidebaroptions.css';

function Sidebaroptions({Icon,title,number, isactive}) {
  return (
    <div className={`sidebaroptions ${isactive && 'sidebarOptions--active'}`}>
        <Icon />
        <h4>{title}</h4>
        <p>{Number}</p>
    </div>
  )
}

export default Sidebaroptions