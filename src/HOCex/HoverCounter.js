import React, { Component } from 'react'
export default class HoverCounter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         hovercount:0
      }
    }
    inc =()=>{this.setState({hovercount:this.state.hovercount+1})}
  render() {
    return (
        <>
      <h1>HoverCounter<p>{this.state.hovercount}<br/><h3><a onMouseLeave={this.inc} href="https://www.tesla.com" >Tesla Hover</a></h3></p></h1>
        </>
    )
  }
}
