import React from 'react';
import { useState } from 'react';
let counter=4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'go to gym',
    description: "go to gym today",
  }, {
    id: 2,
    title: 'leg day',
    description: "today is leg day",
  }, {
    id: 3,
    title: 'chest day',
    description: "today is chest day",
  }])

  function addTodo() {
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])


    /*const newtodos = [];
    for (let i = 0; i < todos.lenght; i++) {
      newtodos.push(todos[i])
    }
    newtodos.push({
      id: 4,
      title: Math.random(),
      description: Math.random()
    })
    setTodos(newtodos)*/
  }

  return (
    <div>
      <button onClick={addTodo}>add new todo</button>
      {
        todos.map((todo)=>
          <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}/>
        )}
    </div>
  )
}


function Todo({title, description}) {
  return(
  <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>) ;
}
export default App

// an optimal way to solve the re-render problem
/*import React from 'react';
import { useState } from 'react';
function App() {
  return (
    <div>
      <Headerwithbutton></Headerwithbutton>
      <Header title="harshit"></Header>
      <Header title="amit"></Header>
      <Header title="ashrafpur"></Header>
      <Header title="subodh"></Header>
    </div>
  )
}

function Headerwithbutton() {
  const [title, setTitle] = useState('my name is ')
  function updateTitle() {
    setTitle('my name is ' + Math.random());
  }

  return  <div>
      <button onClick={updateTitle}>click me to change the title </button>
      <Header title={title}></Header>
    </div>
}
// objest destructuring
function Header({ title }) {
  return <div>
    <h1> {title}</h1>

  </div>
}

export default App*/


// using react.memo to stop unnessereliy re-rendring
/*import React from 'react';
import { useState } from 'react';
function App() {
  const [title, setTitle] = useState('my name is ')

  function updateTitle() {
    setTitle('my name is ' + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>click me to change the title </button>
      <Header title={title}></Header>
      <Header title="harshit"></Header>
      <Header title="amit"></Header>
      <Header title="ashrafpur"></Header>
      <Header title="subodh"></Header>

    </div>
  )
}
// now we are using memo to stop unnesserrily re-rendring
// objest destructuring 
const Header = React.memo(function Header({ title }) {
  return <div>
    <h1> {title}</h1>
  </div>
})
export default App*/
