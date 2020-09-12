import React from 'react'
import Navbar from './components/Navbar'
import ToDoItem from './components/ToDoItem'
import Footer from './components/Footer'

function App() {

  return (
    <div className="todo-list">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  )
}

export default App
