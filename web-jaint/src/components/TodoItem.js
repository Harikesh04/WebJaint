import React from 'react'


export const TodoItem = ({todo,onDelete}) => {
    return (
        <div >
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button type="button" class="btn btn-primary" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        
       
    )
}
