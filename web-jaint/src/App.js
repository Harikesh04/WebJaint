import "./App.css";
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Footer} from "./components/Footer";
import React,{useState} from "react";
import { Addtodo } from "./components/Addtodo";

function App() {
  const onDelete = (todo)=>{
  console.log("i am on delete of todo",todo);
  // let index = todos.indexOf(todo);
  // todos.splice(index,1);deleting in this way will not work we will have to use hooks to delete
  setTodos(todos.filter((e)=>{
   return e!==todo;
  }))
  }
  const [todos, setTodos] = useState ([
   {
    sno: 1,
    title: "Go to the market",
    desc: " you need to go to the market to get this job"
  },
   {
    sno:2 ,
    title: "Go to the mall",
    desc: " you need to go to the market to get this job 2"
  },
   {
    sno: 3,
    title: "Go to the Ghat",
    desc: " you need to go to the market to get this job 3"
  }
])
 
  return (
    <>
      <Header title="Web-jaint" searchBar={true} />
      <Addtodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      
    </>
  );
}

export default App;
// we are writing jsx here (javascript +html)
