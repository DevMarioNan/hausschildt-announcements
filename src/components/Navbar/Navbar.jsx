import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CiDark,CiLight} from "react-icons/ci";
import setCookie from '../../hooks/setCookies';

const Navbar = ({user,theme,setTheme}) => {
    const location = useLocation();
    
    const [icon,setIcon] = useState(<CiLight/>);

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
            setIcon(<CiLight/>);
            setCookie('theme','dark');
        }else{
            document.documentElement.classList.remove('dark');
            setIcon(<CiDark/>);
            setCookie('theme','light');
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        
    }



    return (
        <div className='py-5 border dark:border-black shadow-md dark:shadow-[0px_2px_20px_2px] dark:shadow-cyan-400 bg-white dark:bg-black transition'>
            <nav className='flex mx-auto container justify-between items-center px-5'>
                <Link to ="/">
                    <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white transition">HAUSCHIILDT</h1>
                </Link>
                <div className='flex items-center gap-5'>
                    {location.pathname !== '/signin' && !user &&
                    <Link to="/signin">
                        <button className='bg-blue-500 rounded-lg text-white px-7 py-2'> sign in</button>
                    </Link>
                    }
                    {location.pathname !== '/create' && user &&
                    <Link to="/create">
                        <button className='bg-blue-500 rounded-lg text-white px-7 py-2' > Create</button>
                    </Link>
                    }
                    <button onClick={handleTheme} className="text-3xl text-black dark:text-white transition">
                        {icon}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar