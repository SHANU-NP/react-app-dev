import React, { Component,PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

export default class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'shanu'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'shanu'
            })
        },2000)

    }
  render() {
    console.log("<-------------- Parnet Component rendered----------->")
    return (
        
      <React.Fragment>
        <RegularComp></RegularComp>
        <PureComp></PureComp>
      </React.Fragment>
    )
  }
}
