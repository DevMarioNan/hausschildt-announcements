import React,{useState,useEffect} from 'react'
import Announcement from './Announcement/Announcement'
import { collection, getDocs,orderBy } from "firebase/firestore";
import { db } from '../../utils/firebase';

const Announcements = () => {
    
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        let docs = [];
        
        getDocs(collection(db, "announcements"),orderBy('createdAt',"asc")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                data.id = doc.id;
                docs.push(data);
            });
            docs.sort(function(x, y){
                return y.createdAt - x.createdAt;
            })
            setAnnouncements(docs);
        });
        
    }, [])
    

    return (
        <div className='container mx-auto mt-10 px-5 bg-white dark:bg-gray-900 transition' >
            <h1 className='text-center font-bold text-2xl dark:text-white transition'>Announcements</h1>
            {announcements.map(announcement => (
                <Announcement key={announcement.id} title={announcement.title} desc={announcement.description} time={announcement.createdAt} />
            ))}
        </div>
    )
}

export default Announcements