import React from "react";
import { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this)
  }

//  clickHandler(){
//     this.setState({
//         message : "Good Bye!"
//     })

    clickHandler = () => {
        this.setState({
            message : "GoodBye"
        })
    }
 

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        /*binding this render method */
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

        /*binding in the arrow function */
        {/* <button onClick={() => this.clickHandler()}>click</button> */}

        /*binding the class constructor */
        <button onClick={this.clickHandler}>click</button>

        <button onClick={this.clickHandler}>click</button>
        </div>
    );
  }
}

export default EventBind;
