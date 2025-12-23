import React from 'react'
import { increment,decrement } from './Slice'
import {useDispatch,  useSelector} from 'react-redux'

function Comp() {

     const dispatch = useDispatch();
     const counter= useSelector((state)=> state.counter.count);
 
    const handler1=()=>{
  
        dispatch(increment());
    }
    const handler2=()=>{
       
        dispatch(decrement());
    }


  return (   <>

     <h1> This is counter {counter} </h1>

     <button onClick={handler1}>Increment</button>
     
 
     <button onClick={handler2}>Decrement</button>

  </>
   
  )
}

export default Comp