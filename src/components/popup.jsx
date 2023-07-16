import React from 'react';
import './popup.css';
import popup from './images/popup.jpg'


function Popup(props) {
    // const data = props.data.details;
    const onClose = props.onClose;
    const number=props.data.id;
    const name=props.data.name;
    const contact = props.data.contact;
    const email=props.data.email;
    const address=props.data.address;
    const field=props.data.field;
    const comment=props.data.Comment;
  
    return (
      <div className="popup" style={{
        backgroundImage: `url(${popup})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="popup-inner">
          <button className="close-btn" onClick={onClose}>X</button>
          <h2>Full Details of Student {name}</h2>
          <p>Number : {number}</p>
          <p>Full Name : {name}</p>
          <p>Contact Number : {contact}</p>
          <p>E-Mail : {email}</p>
          <p>Address : {address}</p>
          <p>Specialization : {field}</p>
          <p>Comments: {comment}</p>
        </div>
      </div>
    );
  }

export default Popup;