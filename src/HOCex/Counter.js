import React, { Component } from 'react'
import Encomponent from './Hoc'
class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         //hovercount:0
      }
    }
    inc =()=>{this.setState({count:this.state.count+1})}
   // inchov =()=>{this.setState({hovercount:this.state.hovercount+1})}

  render() {
    return (
      <>
            <h1>Counter<p>{this.state.count}<br/><button onClick={this.inc} > Click to add   </button></p></h1>
            {/*<h1>{this.props.name}</h1>*/}
      </>
    )
  }
}
export default Encomponent(ClickCounter)
