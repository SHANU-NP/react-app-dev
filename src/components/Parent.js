import React from "react";
import { Component } from "react";
import ChildComponent from "./ChildComponent";



class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:"shanu"
        }
        this.greetParent = this.greetParent.bind(this)
            
 }

    greetParent(){
        alert(`Hello ${this.state.message}`)
    }


    render(){
        return(
            <div>
                    <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent