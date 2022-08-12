import React from 'react'

export const Addtodo = (props) => {
    

    return (
        <div className="container my-3" >
           <form >
               <h3>Add a Todo</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Todo Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Todo Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn-sm btn-success">Submit</button>
</form> 
        </div>
    )
}
