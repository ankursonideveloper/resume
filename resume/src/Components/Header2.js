import React from 'react';
import Data from './Data';
import { Information } from '../Information/Information';

const Header2 = () => {
  return (
    <div className='Header2'>
      <a href={Information.gitHub.link}><Data icon={Information.gitHub.gitHubIcon} content={Information.gitHub.link}></Data></a>|
      <a href={Information.linkedIn.link}><Data icon={Information.linkedIn.linkedInIcon} content={Information.linkedIn.link}></Data></a>
    </div>
  )
}

export default Header2
