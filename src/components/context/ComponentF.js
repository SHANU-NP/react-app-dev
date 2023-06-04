import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(user) => {
          return (
            <div>
              <h1>Hello {user.name} and age {user.age}</h1>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
