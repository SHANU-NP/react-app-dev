import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };
  }

  onchangeHandler = (event) => {
    this.setState(
      {
        userName: event.target.value,
      },
      () => console.log(this.state.userName)
    );
  };

  render() {
    return (
      <form>
        <label>userName</label>
        <input
          value={this.state.userName}
          onChange={this.onchangeHandler}
        ></input>
      </form>
    );
  }
}
