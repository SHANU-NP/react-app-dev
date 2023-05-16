import React, { Component } from 'react'
import FrInput from './FrInput'

class FrParentComponent extends Component {

constructor(props) {
  super(props)

  //create refs here 
  this.inputRef = React.createRef();
}
clickHandler = ()=>{
    this.inputRef.current.focus();
}

render() {
    return (
      <div>

        {/* passing refs to the chile Component */}
        <FrInput ref={this.inputRef}></FrInput>

        <button onClick={this.clickHandler}>FocusInput</button>

      </div>
    )
  }
}

export default FrParentComponent