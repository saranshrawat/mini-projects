import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './component/Addtodo'
import Todos from './component/Todos'

function App() {

  return (
    <>
      <h1> This is redux</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
