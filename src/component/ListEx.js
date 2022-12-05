import React from 'react'
export default function ListEx() {
  let num = [ 1 , 5 ,25 ,225 ,1125 ,5625];
     var numList = num.map((num)=>num*5+"*5 = ");
     console.log(num.map((num)=>num*5+"*5 = "));
  return (
    
    <p> {numList}</p>
    
    /*
    <>
    <div >
    {numList}
    <br></br>
    <button> Tap!</button>
    </div>
    <span> Hey Nigga!</span>
    </>*/
  )
}
