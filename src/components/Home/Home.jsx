import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Signin from '../Signin/Signin'
import Announcements from '../Announcements/Announcements'
import {Routes , Route} from 'react-router-dom'


const Home = () => {
    const [user,setUser] = useState(null);
    useEffect(() => {
        console.log(user);
    }, [user])
    
    

    return (
        <div>
            <Navbar user={user} />
            <Routes>
                <Route path="/" element={<Announcements />} />
                <Route path="/signin" element={<Signin setUser={setUser} />} />
            </Routes>
        </div>
    )
}

export default Home