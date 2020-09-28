import React from 'react';
import StaffBox from './StaffBox';

function StaffPage(props) {
  return (
    <>
      { props.staff.map(person => <StaffBox key={person.id} {...person} />) }
    </>
  );
}

export default StaffPage;
