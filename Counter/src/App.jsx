import react, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addValue = () => {
    if(count < 20){ 
      count = count + 1
      setCount(count)
      console.log(count);
    }
    else alert('You have reached the maximum value')
  }

  const removeValue = () => {
    if(count>0) {
      count = count - 1
      setCount(count)
      console.log(count);
      
    }
    else alert("can't go lower.")
  }

  return (
    <>
      <h1>Counter {count}</h1>
      <button id='add'
      onClick={addValue}
      >ADD</button>
      <button id='remove'
      onClick={removeValue}
      >Remove</button>
    </>
  )
}

export default App
