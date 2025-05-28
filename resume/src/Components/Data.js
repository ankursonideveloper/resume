import React from 'react';
import { MdEmail } from "react-icons/md";

const Data = (props) => {
  return (
    <div>
      <span>{props.icon}</span><span>{props.content}</span>
    </div>
  )
}

export default Data
