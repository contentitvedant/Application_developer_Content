import React, { useReducer } from 'react';
import "./Card.css"

const reducer=(state,action) =>{
// eslint-disable-next-line default-case
switch(action.type){
  case 'increment':
    return {...state,count : state.count + 1}
  
  case 'decrement':
    return {...state,count : state.count - 1}
  
  default:
    return state;

}
}


const Card = () => {
const [state,dispatch] = useReducer(reducer,{count:0})

// let [before,after]=useState(0);

  const Ihandler=()=>{ 
    // console.log(before)
  //  aftr(before+1)
  dispatch({type:"increment"})

  }
  const Dhandler=()=>{
    // console.log(before)
    // after(before-1)
    dispatch({type:"decrement"})

   }
  return (
    <div className='card1'>
  <h1>{state.count}</h1>
  <button  className='btn-cursor' onClick={Ihandler}>Increment</button>
  <button onClick={Dhandler}>Decrement</button>
    </div>
  )
}

export default Card;