import React from "react";

const addTask = props => (
  <div>
    <input type="text" value={props.name} />
    <button onClick={props.added}>Add task</button>
  </div>
);

export default addTask;
