import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// real wrapper components
function App()
{
  const[todos,SetTodos]= useState([])
  useEffect(()=>{
    setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todos')
    .then(async (res)=>{
      const json = await res.json();
      SetTodos(json.todos)
    })
    },10000) 
  },[])
  return <div>
   {todos.map((todo)=> <Todo key={todo.id} todo={todo.title} description={todo.description} />)}
  </div>
}

function Todo({title,description})
{
  return <div><h1>
  {title}
</h1>
<h4>
  {description}
</h4>
</div>
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

// in this program we understand the use of key and the syntax of the key
/*import React from 'react';
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
    setTodos(newtodos)
  }

  return (
    <div>
      <button onClick={addTodo}>add new todo</button>
      {
        todos.map((todo)=>
          <Todo
          // key is use to unicely identify the eliment
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
export default App*/


// component wrapper 
/*import React from 'react';
import { useState } from 'react';
// real wrapper components
function App()
{
  return <div>
    <CardWrapper>
      hi there
    </CardWrapper> 
    <CardWrapper>
      hello mister
    </CardWrapper> 
  </div>
}

function CardWrapper({children})
{
  return <div style={{border:'2px solid red' , margin:2,padding:10}}>
    {children}
  </div>
}
export default App*/


// use of useEfect
/*import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// real wrapper components
function App()
{
  useEffect(function(){
    alert('hi ')
  },[])
  return <div>
    hi there
  </div>
}*/