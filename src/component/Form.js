import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    email: "",
    city: ""
  };

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.city === "") {
      this.setState({ city: "Sydney" });
      console.log("city:" + this.state.city);
    }
    console.log("Sumitted:");
    console.log(this.state);
    this.setState({ username: "", email: "", city: "" });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(event);
    this.setState({
      [name]: value
    });
    console.log("name: " + name + "value:" + value);
  }

  render() {
    return (
      <form
        style={{ width: 300, margin: 20 }}
        onSubmit={event => this.handleSubmit(event)}
      >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={this.state.username}
            onChange={event => this.handleUsernameChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={this.state.email}
            onChange={event => this.handleEmailChange(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            id="city"
            value={this.state.city}
            onChange={event => this.handleCityChange(event)}
          >
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Brisbane">Brisbane</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}

export default Form;
