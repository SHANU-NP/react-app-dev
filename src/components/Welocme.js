import { Component } from "react";
import React from "react";

class Welcome extends Component {
  render() {
    const { name } = this.props;
    // const(state1,state2) = this.state;
    return <h1>Hi {name}</h1>;
  }
}
export default Welcome;
