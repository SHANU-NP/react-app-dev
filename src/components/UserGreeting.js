import React from "react";
import { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome shanu</div>
    ) : (
      <div> Welcome guest</div>
    );

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome shanu</div>
    // }else{
    //     message = <div>Welcome guest</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedIn){
    //     return <div>Welcome shanu</div>
    // }else{
    //     return <div>Welcome guest</div>
    // }
  }
}

export default UserGreeting;
