import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Signin from '../Signin/Signin'
import Announcements from '../Announcements/Announcements'
import {Routes , Route} from 'react-router-dom'
import Create from '../Create/Create'




const Home = () => {
    const [user,setUser] = useState(null);
    
    

    return (
        <div>
            <Navbar user={user} />
            <Routes>
                <Route path="/" element={<Announcements  />} />
                <Route path="/signin" element={<Signin setUser={setUser} />} />
                <Route path="/create" element={<Create user={user} />} />
            </Routes>
        </div>
    )
}

export default Home