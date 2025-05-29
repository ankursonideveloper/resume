import React from 'react';
import Data from './Data';
import { Information } from '../Information/Information';

const Header1 = () => {
  return (
    <div className='Header1'>
      <Data icon={Information.email.emailIcon} content={Information.email.emailId}></Data>|
      <Data icon={Information.phone.phoneIcon} content={Information.phone.phoneNumber}></Data>
    </div>
  )
}

export default Header1
