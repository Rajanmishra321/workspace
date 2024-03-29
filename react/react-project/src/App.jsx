import { useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos]=useState([{
    title : "go to gym",
    description : " go to gym 7-9",
    completed : false
  },
{
  title : "study react",
    description : " study react from 8-10",
    completed : true
}])

function addtodo()
{
  setTodos([...todos,{
    title : 'add todo',
    description:'desc of new todo'
  }])
}  
  return (
    <div>
      <button onClick={addtodo}>add a random todo</button>
        {/* <Todos title={todos[0].title} description={todos[0].description}></Todos>
        <Todos title={todos[1].title} description={todos[1].description}></Todos> */}
        {todos.map(function(todos)
        {
          return <Todos title={todos.title} description={todos.description}></Todos>
        })}
    </div>
  )
}

function Todos(props)
{
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  
  </div>

}

export default App
