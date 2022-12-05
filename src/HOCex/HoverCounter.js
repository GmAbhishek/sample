import React, { Component } from 'react'

export default class HoverCounter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         hovercount:0
      }
    }
    inc =()=>{this.setState({hovercount:this.state.hovercount+1})}
    bulge= ()=>{}
  render() {
    return (
        <>
      <h2>HoverCounter<p>{this.state.hovercount}<br/><button onMouseLeave={this.inc} > Hover over me!  </button></p></h2>
        </>
    )
  }
}
