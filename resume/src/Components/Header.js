import React from 'react';
import Title from './Title';
import Header1 from './Header1';
import Header2 from './Header2';

const Header = (props) => {
  return (
    <div >
      {props.children}
    </div>
  )
}

export default Header
