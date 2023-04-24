import React from "react";
import { Component } from "react";


class ClassClick extends Component{

    clickHandler(){
        console.log("Button clicked")
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
  
}

export default ClassClick