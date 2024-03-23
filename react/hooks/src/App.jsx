import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App


// usememo() and usecallback()
/*import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [exchangedata1, setexchangedata1] = useState({});
  const [exchangedata2, setexchangedata2] = useState({});
  const [bankdata, setbankdata] = useState({})

 useEffect(()=>{
  setTimeout(() => {
    setbankdata({
      income: 100
    })
  }, 3000);
 },[])
  

  useEffect(()=>{
      setexchangedata1({
        return: 100
      })
  },[]) 

  useEffect(()=>{
      setexchangedata2({
        return: 100
      })
  },[]) 
// one way of removing unnessesry re-rendring is by using usememo() hook. it returns a value
   const cryptoreturn=useMemo(()=>{
   return exchangedata1+exchangedata2;
  },[exchangedata1,exchangedata2])

  // another way of doing the same above thing is by using usecallback() function
  // it returns a function 

  const cryptoreturnfunction=useCallback(function(){
    return exchangedata1.return+exchangedata2.return;
  })
  
  const incometax = (bankdata.income + cryptoreturnfunction()) * 0.3;

  return <div>
    hi there your income tax return are {incometax};
  </div>

}



export default App;*/


// useMemo()
/*import { useEffect, useMemo, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  const[inputvalue,setInputvalue]=useState(1);

 let count = useMemo(()=>{
  let count=0;
  for(let i=1;i<=inputvalue;i++)
  {
    count=count+i;
  }
  return count;
 },[inputvalue])
  return <div>
    <input onChange={function(e){
      setInputvalue(e.target.value)
    }} placeholder='sum from 1 to n is'/> <br />
    sum from 1 to {inputvalue} is {count}
    <br />
    <button onClick={()=>{
      setCounter(counter+1)
    }}>counter ({counter})</button> <br />
  </div>
}



export default App;*/

// useEffect()
/*import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sum-server.100xdevs.com/todos');
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
}

export default App;*/

// axios 
/*import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [selectedid,setselectedid]=useState(1)
  return (
    
    <div>
      <button onClick={function()
      {
        setselectedid(1)
      }}>1</button>
      <button onClick={function()
      {
        setselectedid(2)
      }}>2</button>
      <button onClick={function()
      {
        setselectedid(3)
      }}>3</button>
      <button onClick={function()
      {
        setselectedid(4)
      }}>4</button>
      <Todo id={selectedid} />
    </div>
  );
}

function Todo({ id }) {

  const [todo, setTodo] = useState({});
  useEffect(()=>{
    axios.get('https://sum-server.100xdevs.com/todo?id='+id)
    .then(function(res)
    {
      console.log(res)
      setTodo(res.data.todo)
    })
  },[id])


  return (
    <div>
      id:{id}
      <h1>{todo.title}</h1>
      {todo.description}
    </div>
  );
}

export default App;*/