import React from 'react';
import { useState } from 'react';
import ToDOLists from './Todo_list';
import './index.css'



const App =()=>{
   
   const [inputList,setInputList]= useState("");
   const[items,setItems]= useState([]);  


       const itemEvent=(event)=>{
          setInputList(event.target.value);            //it takes the current data written in input field

       }


   //This function  takes the data from input and saves it in an array
      
   const listOfItems =()=>{                         
                setItems((oldItems)=>{                         //Here we are updating setItems state by first copying it, appending it and at last returning it                         
                  return[...oldItems,inputList];
                });
            setInputList("");                               //after adding an item to list we make our input field empty
      };




      const deleteItems=(id)=>{                           //deletes the data from an array
         setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{                  //here we are filtering items based on a certain condition and adding them to a new array
                 return index!==id;
            });
          });
      };




   return(
    <>
            <div  className="main_div">
                     <div  className="centre_div">
                               <br/>
                        <h1>MY TODO LIST</h1>
                               <br/>
                     
                      
                              <input type='text' placeholder='Add your text' onChange={itemEvent}  value={inputList}/> 
                               <button onClick={listOfItems}>+</button>
                                  
                           <ol>
                              {/* */}
                                

                               { items.map((itemval,index)=>{
                                 return <ToDOLists 
                                 
                                 key={index} 
                                 onSelect={deleteItems} 
                                 id={index}
                                 text={itemval}/>
                                })}
                           </ol>
                           
                        
                       
                     </div>
            </div>

    </>

 );      
   





}

export default App;













