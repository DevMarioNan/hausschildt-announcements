import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = ({setUser,notify}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in
            setUser(userCredential.user);
            toast.success("successfully signed in");
            navigate('/');
        }).catch((error) => {
            toast.error("email or password is incorrect");
        });
    }

    return (
        <div className='container mx-auto px-5  mt-52'> 
            <div className=' border-black border rounded-lg py-5 sm:w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto'>

            <h1 className='text-2xl font-bold text-center pb-10'>Signin</h1>            
                <form className='flex flex-col gap-10 ' onSubmit={(e)=>handleForm(e)}>
                    <input type="email" placeholder="email" className='border shadow-sm w-[90%] mx-auto px-5 py-3 ' onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="password" className='border shadow-sm w-[90%] mx-auto px-5 py-3' onChange={(e)=>setPassword(e.target.value)}/>
                    <button className='bg-blue-500 text-white px-5 py-3 rounded-lg mx-auto'>Signin</button>
                </form> 
            </div>
            <ToastContainer 
                position="bottom-center"

            />
        </div>
    )
}

export default Signin