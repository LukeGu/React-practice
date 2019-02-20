import React from "react";

const task = props => (
  <div>
    <p>{props.name}</p>
    <button onClick={props.changeStatus}>{props.status}</button>
    <button onClick={props.deleted}>Remove</button>
  </div>
);

export default task;
