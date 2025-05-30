import React from 'react';
import { Information } from '../Information/Information';

const Skills = () => {
  return (
    <div>
      <p><span>Languages: </span><span>{Information.skills.language}</span></p>
      <p><span>Technologies & Tools: </span><span>{Information.skills.technologiesAndTools}</span></p>
    </div>
  )
}

export default Skills
