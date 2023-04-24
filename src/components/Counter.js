import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increament() {
    // this.setState(
    // {
    //     count: this.state.count + 1
    // },

    // () => console.log("Call back function : ",this.state.count)
    
    // );

   this.setState(prev => {

    return {
       count : prev.count + 1
    }
   })
  
}

incrementFiveTimes(){
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
}

  render() {
    return (
      <div>
        <div>counter : {this.state.count}</div>
        <button onClick={() => this.incrementFiveTimes()}> Increment</button>
      </div>
    );
  }
}

export default Counter;
