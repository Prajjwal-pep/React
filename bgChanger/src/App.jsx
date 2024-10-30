import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("Black")



  return (
    <>
      <div class='main' style={{backgroundColor: color}}>
          <div class='options'>
            <div class='colorbtn'>
              <button style={{backgroundColor: "red" }}
              onClick={() => {
                setColor("red")
              }}
              >RED</button>
              <button style={{backgroundColor: "yellow" }}
              onClick={() => {
                setColor("yellow")
              }}
              >YELLOW</button>
              <button style={{backgroundColor: "green" }}
              onClick={() => {
                setColor("green")
              }}
              >GREEN</button>
              <button style={{backgroundColor: "pink" }}
              onClick={() => {
                setColor("pink")
              }}
              >PINK</button>
            </div>
          </div>
      </div>

    </>
  )
}

export default App
