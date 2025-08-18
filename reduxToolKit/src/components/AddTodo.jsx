import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch  = useDispatch();  // dispatch use reducer to chaange values in the store
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text)) // call addTodo inside the dispatch
        setText("");
    };
    return (  
        <div className='h-screen flex items-center justify-center'>
            <form
                onSubmit={handleSubmit}
                className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-md"
            >
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter a todo..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                    Add Todo
                </button>
            </form>

        </div>
    )
}

export default AddTodo
