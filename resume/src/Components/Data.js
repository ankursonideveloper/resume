import React from "react";

const Data = (props) => {
  return (
    <div className="Data">
      <span className="icon">{props.icon}</span>
      <span>{props.content}</span>
    </div>
  );
};

export default Data;
