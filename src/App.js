
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  const onDelete =(todo)=>{
    console.log("I am ondelete of todo", todo)

    setTodos(todos.filter((e)=>{
      return e!==todo;
  }));
  }
  const addTodo = (title, desc)=>{
    console.log("I am adding todo", title, desc)
    let sno;
    if(todos.length===0)
    {
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno +1; 
    }
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done 1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to the market to get this job done 2"
    },
    {
      sno: 3,
      title: "Go to the road",
      desc: "you need to go to the market to get this job done 3"
    },
  ]);
  return (
    <>
    <Header title="MyTodos List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos= {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
