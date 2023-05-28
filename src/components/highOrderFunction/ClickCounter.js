import React, { Component } from "react";
import updatedComponent from "./withCounter";

class ClickCounter extends Component {

 render() {
  const {count,incrementCount} = this.props

    return (
      <div>
        <button onClick={incrementCount}>click {count} times</button>
      </div>
    );
  }
}

export default updatedComponent(ClickCounter)
