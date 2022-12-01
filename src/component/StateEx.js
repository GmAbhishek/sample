import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
      this.state = {
         class:1,
         name:"Gm"
      }
    }
    //inc=()=>{ return this.setState({count:this.State.count+2})}
  render() {
    return (
      <div> 
      <button onClick={()=>{return this.setState({count:this.state.count+1})}}>Click me{this.state.class}</button>
      </div>
    )
  }
}
