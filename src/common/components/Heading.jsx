import React from 'react';
import {getUser} from "../../utils/common/commonFunctions.js";

export default function Heading({heading, children}) {
  const user = JSON.parse(getUser())
  return (
    <div className='common-heading'>
      <div className='header d-flex justify-content-between'>
        <h3>{heading}</h3>
        <p className='profile-person-name'>{user?.first_name}</p>
      </div>
      <div className='heading-children'>{children}</div>
    </div>
  );
}
