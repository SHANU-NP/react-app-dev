import React, { Component } from 'react'

class RefDemo extends Component {

    constructor(props) {
      super(props)
    this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    onClickHandler = () => {
    alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <button onClick={this.onClickHandler}>Submit</button>
      </div>
    )
  }
}
export default RefDemo
