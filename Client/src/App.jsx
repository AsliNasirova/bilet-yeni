import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Mainlay from './Layout/MainLayout/mainlay'
import Home from './Pages/Home/home'
import Add from './Pages/Add/add'
import Detail from './Pages/Detail/detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Mainlay/>}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/:id' element={<Detail/>}></Route>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
