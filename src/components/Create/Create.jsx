import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../../utils/firebase';
import {doc , setDoc,serverTimestamp} from 'firebase/firestore';
import moment from 'moment/moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Create = ({user}) => {
    
    const navigate = useNavigate();
    useEffect(() => {
        if(!user){
            navigate('/signin');
        }
    }, [user,navigate])

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    
    const handleForm = (e) => {
        e.preventDefault();
            setDoc(doc(db, "announcements", title), {
                title: title,
                description: description,
                createdAt: serverTimestamp()
            }).then(() => {
                toast.success("Document successfully written!");
            }).catch((error) => {
                toast.success("successfully created");
            });
        
    }

    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold text-center pb-10'>Create a new Announcement</h1>  
            <form onSubmit={(e)=>handleForm(e)} className="flex flex-col justify-center gap-10">
                <input type="text" placeholder="title" className='border shadow-sm w-[70%] mx-auto px-5 py-3 ' onChange={(e)=>setTitle(e.target.value)}/>
                <textarea placeholder="description" className='border shadow-sm w-[70%] mx-auto px-5 py-3 ' onChange={(e)=>setDescription(e.target.value)}/>
                <button type='submit' className='bg-blue-500 text-white px-5 py-3 rounded-lg mx-auto'>Create</button>
            </form>
            <ToastContainer 
                position="bottom-center"
                />
        </div>
    )
}

export default Create