import React, { Component } from "react";
//import logo from "./logo.svg";
//import "./App.css";
//import Form from "./component/Form";
//import TodoApp from "./component/TodoApp";
//import styled from "styled-components";
import * as actions from "./actions";
import { connect } from "react-redux";

class StopWatch extends Component {
  componentDidMount() {
    this.props.logIn();
  }

  changeUserName = () => {
    this.props.changeUserName({
      userName: "Mao Zedong"
    });
  };

  render() {
    return (
      <div>
        <p> {this.props.status} </p>
        <p>
          Hi! {this.props.userName} ({this.props.authority})
        </p>
        <hr />
        <button onClick={this.changeUserName}>Click to change username</button>
        <button onClick={() => this.changeToAdmin()}>
          Click to change authority
        </button>
        <button onClick={() => this.props.logOut()}>Log Out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    userName: user.userName,
    authority: user.authority,
    status: user.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeUserName: name => dispatch(actions.changeUserName(name)),
    changeToAdmin: () => dispatch(actions.changeToAdmin()),
    logIn: () => dispatch(actions.logIn()),
    logOut: () => dispatch(actions.logOut())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopWatch);
