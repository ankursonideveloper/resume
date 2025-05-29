import React from 'react';
import Data from './Data';
import { Information } from '../Information/Information';

const Header2 = () => {
  return (
    <div className='Header2'>
      <Data icon={Information.gitHub.gitHubIcon} content={Information.gitHub.link}></Data>|
      <Data icon={Information.linkedIn.linkedInIcon} content={Information.linkedIn.link}></Data>
    </div>
  )
}

export default Header2
