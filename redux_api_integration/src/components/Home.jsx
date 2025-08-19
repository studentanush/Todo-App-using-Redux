import React from 'react'
import {useDispatch ,useSelector} from "react-redux"
import { getUser } from '../features/userDataSlice';
const Home = () => {
    const data = useSelector((state)=>state.app);  // initial it is empty after we call the api it get filled
    console.log(data.users);
    const dispatch = useDispatch();
    const handleSubmit = ()=>{
        dispatch(getUser());

    }
  return (
   <>
    <button onClick={handleSubmit}> click</button>
    <div> {data.users.map((item,index)=>(
        <div key={index} className=''>
            {item.name}
        </div>
        
    ))}</div>
   </>
  )
}

export default Home
