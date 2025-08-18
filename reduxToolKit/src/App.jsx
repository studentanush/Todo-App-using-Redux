import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      
       <h1 className='font-bold border shadow-lg'>TODO app Boii</h1>
        <AddTodo/>
        <Todos/>
      
    </div>
  )
}

export default App
