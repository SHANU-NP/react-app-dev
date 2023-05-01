import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("<------------ Pure component rendered-------------->")
    return (
      <div>PureComp</div>
    )
  }
}
export default PureComp
