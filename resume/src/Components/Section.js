import React from 'react';
import Divider from './Divider';

const Section = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <Divider/>
      <p>{props.children}</p>
    </div>
  )
}

export default Section
