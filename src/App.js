import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chats from './routes/Chats'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="chats" element={<Chats />} />
      </Routes>
    </div>
  )
}

export default App
