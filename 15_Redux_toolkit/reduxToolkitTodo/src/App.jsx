import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      {/* TUTOR IMPORTANT NOTE: The tutor jokes "चाय और डक्स" (Chai aur Redux) for the UI implementation[cite: 10]. */}
      <h1 className="text-3xl text-white font-bold text-center">Chai aur Redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App