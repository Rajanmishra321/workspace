import { countAtom, evenSlector } from "./store/atom/count"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>

    </div>
  )
}

function Todo()
{
return <div>
  <input type="text" placeholder="title" onChange={(e)=>{
    settitle(e.target.value)
  }}/>
  <input type="text" placeholder="description" />
  <button onClick={}>add todo</button>
</div>
}

function Count() {
  console.log('inside count')
  return <div>
    <CountRerender />
    <Buttons></Buttons>
  </div>
}

function CountRerender() {
  const count = useRecoilValue(countAtom)
  return <div>
    <b>{count}</b>
  </div>

}

function Buttons() {
  console.log('inside buttons')
  const setcount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setcount(count => count + 1)
    }}>increase</button>

    <button onClick={() => {
      setcount(count => count - 1)
    }}>decreases</button>
  </div>
}

function Evenprint() {
  const count = useRecoilValue(evenSlector)
  // if(count%2==0)
  // {
  //   return <div>this is even</div>
  // }
  return <div>
    {(count % 2 == 0) ? 'it is even' : null}
  </div>


}
export default App


// use of selector
/*import { countAtom, evenSlector } from "./store/atom/count"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
        <Evenprint />
      </RecoilRoot>

    </div>
  )
}
function Count() {
  console.log('inside count')
  return <div>
    <CountRerender />
    <Buttons></Buttons>
  </div>
}

function CountRerender() {
  const count = useRecoilValue(countAtom)
  return <div>
    <b>{count}</b>
  </div>

}

function Buttons() {
  console.log('inside buttons')
  const setcount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setcount(count => count + 1)
    }}>increase</button>

    <button onClick={() => {
      setcount(count => count - 1)
    }}>decreases</button>
  </div>
}

function Evenprint() {
  const count=useRecoilValue(evenSlector)
  // if(count%2==0)
  // {
  //   return <div>this is even</div>
  // }
  return <div>
   {(count%2==0) ? 'it is even':null}
    </div>


}
export default App*/


// use of recoil
/*import { countAtom } from "./store/atom/count"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>

    </div>
  )
}
function Count() {
  console.log('inside count')
  return <div>
    <CountRerender />
    <Buttons></Buttons>
  </div>
}

function CountRerender() {
  const count = useRecoilValue(countAtom)
  return <div>
    <b>{count}</b>
  </div>

}

function Buttons() {
  console.log('inside buttons')
  const setcount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setcount(count => count + 1)
    }}>increase</button>

    <button onClick={() => {
      setcount(count => count - 1)
    }}>decreases</button>
  </div>
}
export default App*/

// using context api to resolve prop drilling
/*function Count({setcount})
{
  console.log("inside count")
  return <div>
   <CountRerender  />
    <Buttons  setcount={setcount}></Buttons>
  </div>
}

function CountRerender()
{
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>

}

function Buttons({setcount})
{
  const count=useContext(CountContext)
   return <div>
    <button onClick={()=>
  {
    setcount(count+1)
  }}>increase</button>

  <button onClick={()=>{
    setcount(count-1)
  }}>decreases</button>
    </div>
}

export default App*/

// prop drilling
/*import { useState } from "react"

function App() {
const [count,setcount]=useState(0)
  return (
    <div>
    <Count count={count} setcount={setcount}></Count>

    </div>
  )
}
// prop driling :- passing the state variable to the component by mediam
function Count({count,setcount})
{
  return <div>
    {count}
    <Buttons count={count} setcount={setcount}></Buttons>
  </div>
}

function Buttons({count,setcount})
{
   return <div>
    <button onClick={()=>
  {
    setcount(count+1)
  }}>increase</button>

  <button onClick={()=>{
    setcount(count-1)
  }}>decreases</button>
    </div>
}

export default App*/


// lazy loading
/*import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import React,{Suspense} from 'react'
// lazy loading this only bring the required files from the bundle
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))
function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        {// suspense is an api , it uses when asynchronous component fething , asynchronous data fetching }
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div >
    <button onClick={() => {
      // right way of doing the link it don't fetch the server again and again
      navigate('/dashboard')
    }}>Dashboard</button>

    <button onClick={() => {
      navigate('/')
    }}>Landing</button>

  </div>
}

export default App*/


// navigation method for fetching the server
/*import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar()
{
  const navigate = useNavigate();
   return <div >
        <button onClick={() => {
          // right way of doing the link it don't fetch the server again and again
          navigate('/dashboard')
        }}>Dashboard</button>

        <button onClick={() => {
          navigate( '/')
        }}>Landing</button>

      </div>
}

export default App*/


// linking the page by using window.location.href
/*import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {

  return (
    <div>
      <div >
        <button onClick={() => {
          // one way of linking the page in frontend
          // it did not perform clint side routing it re-fetch every thing from the server that's why this is not a good method
          window.location.href = '/dashboard'
        }}>Dashboard</button>

        <button onClick={() => {
          window.location.href = '/'
        }}>Landing</button>

      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App*/