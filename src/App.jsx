import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Skills from './page/Skills';
import Project from './page/project';
import Career from './page/Career';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skill' element={<Skills />} />
        <Route path='/project' element={<Project /> } />
        <Route path='/career' element={<Career /> } />
      </Routes>
    </>
  )
}

export default App
