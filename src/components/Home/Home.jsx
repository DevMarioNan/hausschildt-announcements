import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Signin from '../Signin/Signin'
import Announcements from '../Announcements/Announcements'
import {Routes , Route} from 'react-router-dom'
import Create from '../Create/Create'
import getCookie from '../../hooks/getCookie';



const Home = () => {
    const [user,setUser] = useState(getCookie('user'));
    const [theme,setTheme] = useState('dark');
    

    return (
        <div className='bg-white dark:bg-gray-900 h-screen transition' >
            <Navbar user={user} theme={theme} setTheme={setTheme} />
            <Routes>
                <Route path="/" element={<Announcements  />} />
                <Route path="/signin" element={<Signin setUser={setUser} theme={theme}/>} />
                <Route path="/create" element={<Create user={user} theme={theme}/>} />
            </Routes>
        </div>
    )
}

export default Home