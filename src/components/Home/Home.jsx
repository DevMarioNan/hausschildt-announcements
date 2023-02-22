import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Signin from '../Signin/Signin'
import Announcements from '../Announcements/Announcements'
import {Routes , Route} from 'react-router-dom'
import Create from '../Create/Create'
import getCookie from '../../hooks/getCookie';
import setCookie from '../../hooks/setCookies';
import Footer from '../footer/Footer'

const Home = () => {
    const [user,setUser] = useState(getCookie('user'));
    const [theme,setTheme] = useState(getCookie('theme') ?  getCookie('theme') : 'light');
    

    return (
        <div className='bg-white dark:bg-gray-900 h-screen transition' >
            <Navbar user={user} theme={theme} setTheme={setTheme} />
            <Routes>
                <Route path="/" element={<Announcements  />} />
                <Route path="/signin" element={<Signin setUser={setUser} theme={theme}/>} />
                <Route path="/create" element={<Create user={user} theme={theme}/>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Home