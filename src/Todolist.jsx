import React from "react";

const Todolist = (props) =>{
    return (
        <div className="todoitems">
        <i class="fa-solid fa-trash" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
        <li>{props.text}</li>
        </div>
    ) 
}

export default Todolist;