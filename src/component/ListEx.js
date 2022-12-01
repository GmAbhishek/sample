import React, { Component } from 'react'
export default class ListEx extends Component {
  render() {
     let num = [ 1 , 4 ,7 ,544 ,654 ,44];
     var numList = num.map((num)=>num*5+" Hello");
     console.log(numList);
     return(
      <div className="List">
      <button>Tap!</button>
    </div>
     );
  }
}
