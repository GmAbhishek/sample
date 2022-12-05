import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    inc =()=>{this.setState({count:this.state.count+1})}

  render() {
    return (
        <>
      <h1>Counter</h1>
      <br/>
     <button onClick={this.inc}> Click to add {this.state.count}</button>
        </>
    )
  }
}
