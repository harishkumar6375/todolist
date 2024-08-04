import React, { useState } from "react";
import "./App.css"
import Todolist from "./Todolist";

const App = () =>{

  const [input , setinput] = useState("");
  const [items , setitems] = useState([]);

  const inputval =(event)=>{
    setinput(event.target.value)
  }
  
  const addItems = ()=>{
    setitems((olditems)=>{
      return [...olditems,input];
    })
    setinput("");
  }

  const deleteItems = (id) =>{
    console.log("deleted")
    setitems((olditems)=>{
      return olditems.filter((arrEle,index)=>{
          return index!==id;
      })
    })

}

  return(
    <>
    <div className="main">
     <div className="parent">
     <div className="title">
      <h1 className="heading">ToDo List</h1>
     </div>
     <div className="input">
     <input type="text" 
     className="inputVal" 
     placeholder="Add a Items" 
     value={input}
     onChange={inputval}/>
     <button className="add" onClick={addItems}>+</button>
     </div>
     <div className="items">
      <ol>
        {items.map((itemval, index)=>{
          return <Todolist text={itemval}
          key={index}
          id= {index}
          onSelect ={deleteItems}
           />
        })}
      </ol>
     </div>
     </div>
     </div>
    
    </>
  )
}


export default App;