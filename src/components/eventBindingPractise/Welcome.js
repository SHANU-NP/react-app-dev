import React, { Component } from 'react'

class WelcomeMessage extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'please click Below'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }


//    clickHandler(){
//     this.setState({
//         message : 'Hi! Welcome to React..'
//     })
        
//     }

clickHandler = () =>{
    this.setState({
        message : 'Hello boyy welcom to React..'
    })
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler}>click me</button> */}
        <button onClick={this.clickHandler}>click me</button>

      </div>
    )
  }
}

export default WelcomeMessage
