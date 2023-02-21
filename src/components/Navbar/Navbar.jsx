import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({user}) => {
    const location = useLocation();
    

    return (
        <div className='py-5 border shadow-md'>
            <nav className='flex mx-auto container justify-between items-center px-5'>
                <Link to ="/">
                    <h1 className="text-xl md:text-3xl font-bold">HAUSCHIILDT</h1>
                </Link>
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
            </nav>
        </div>
    )
}

export default Navbar