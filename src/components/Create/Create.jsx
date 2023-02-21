import React from 'react'
import { useNavigate } from 'react-router-dom';

const Create = ({user}) => {
    const navigate = useNavigate();
    if(!user){
        navigate('/signin');
    }
    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold text-center pb-10'>Create a new Announcement</h1>  
            <form onSubmit={(e)=>handleForm(e)} className="flex flex-col justify-center gap-10">
                <input type="text" placeholder="title" className='border shadow-sm w-[70%] mx-auto px-5 py-3 ' />
                <textarea placeholder="description" className='border shadow-sm w-[70%] mx-auto px-5 py-3 ' />
                <button type='submit' className='bg-blue-500 text-white px-5 py-3 rounded-lg mx-auto'>Create</button>
            </form>
        </div>
    )
}

export default Create