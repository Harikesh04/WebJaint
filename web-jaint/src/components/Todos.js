import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className = " container">
            <h3 className=" my-3">Todos lists</h3>
            { props.todos.length==0? "No todos to disaplay":
          
            props.todos.map((todo)=>{
               return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
           })
           }
      
           
        </div>
    )
}
