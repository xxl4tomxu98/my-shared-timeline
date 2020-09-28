import React from 'react';

function StaffBox(props) {
  return (
    <div className="staff-box">
      <div className="staff-box__name">
        {props.name}
      </div>

      <div className="staff-box__title">
        {props.title}
      </div>

      <img className="staff-box__photo" src={props.photo} alt={props.name}/>
    </div>
  );
}

export default StaffBox;
