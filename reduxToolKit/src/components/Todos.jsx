import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
const Todos = () => {
  const todos = useSelector((state)=>state.todos); // to access something use useSelector
  console.log(todos);
  const dispatch = useDispatch(); // to perform any operation
  return (
    <>

      <div>Todos</div>
      {todos.map((todo)=>(
        <div className='flex flex-col text-black' key={todo.id}>
          {todo.text}
          <button onClick={()=>dispatch(removeTodo(todo.id))} >delete</button>
        </div>
        
      ))}
    </>
  )
}

export default Todos
