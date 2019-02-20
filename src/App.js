import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import TodoApp from "./component/TodoApp";

class StopWatch extends Component {
  state = {
    username: "",
    email: "",
    city: ""
  };

  render() {
    return (
      <div>
        <Form />
        <hr />
        <TodoApp />
      </div>
    );
  }
}

export default StopWatch;
