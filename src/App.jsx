import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Discover from './components/Discover'
import Article from './components/Article'
import HomePage from './components/HomePage'


const App = () => {
  return (
    <div className="flex h-screen bg-white">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Discover/>} />
          <Route path='/discover/page' element={<Article/>} />
          <Route path='/home' element={<HomePage/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
