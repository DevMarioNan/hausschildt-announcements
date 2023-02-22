import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getCookie from '../../hooks/getCookie';
import removeCookie from '../../hooks/removeCookie';
import setCookie from '../../hooks/setCookies';

const Signin = ({setUser,theme}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = getCookie('user');
        if(user){
            setUser(user);
        }
    }, [])

    const handleForm = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            removeCookie('user');
            // Signed in
            setUser(userCredential.user);
            setCookie('user',userCredential.user.email);
            toast.success("successfully signed in");
            navigate('/');
        }).catch((error) => {
            toast.error("email or password is incorrect");
        });
    }

    return (
        <div className='container mx-auto px-5  mt-52 transition'> 
            <div className=' border-black dark:border-white border rounded-lg py-5 sm:w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto transition'>

            <h1 className='text-3xl font-bold text-center pb-10 dark:text-white transition'>Signin</h1>            
                <form className='flex flex-col gap-10 ' onSubmit={(e)=>handleForm(e)}>
                    <input type="email" placeholder="email" className='border shadow-sm w-[90%] mx-auto focus:shadow-lg px-5 py-3 dark:bg-gray-800 dark:text-white dark:focus:shadow-[1px_1px_15px_2px_#22d3ee] transition ' onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="password" className='border shadow-sm w-[90%] mx-auto focus:shadow-lg px-5 py-3 dark:bg-gray-800 dark:text-white dark:focus:shadow-[1px_1px_15px_2px_#22d3ee] transition' onChange={(e)=>setPassword(e.target.value)}/>
                    <button className='bg-blue-500 text-white px-5 py-3 rounded-lg mx-auto'>Signin</button>
                </form> 
            </div>
            <ToastContainer 
                position="bottom-center"
                theme={theme}
            />
        </div>
    )
}

export default Signin