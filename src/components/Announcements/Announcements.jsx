import React from 'react'
import Announcement from './Announcement/Announcement'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase';

const Announcements = () => {

    const announcements = [
        {
            id: 1,
            title: 'Announcement 1',
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, labore hic libero dolores officia esse veritatis laborum nemo iure quia, consequatur dolorem illum doloribus corporis dolor fugit. Dolor, maxime adipisci.",
            date: '2021-08-01'
        },
        {
            id: 2,
            title: 'Announcement 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            date: '2021-08-02'
        },
        {
            id: 3,
            title: 'Announcement 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            date: '2021-08-03'
        },
        {
            id: 4,
            title: 'Announcement 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            date: '2021-08-04'
        },
    ]


    return (
        <div className='container mx-auto mt-10 px-5'>
            <h1 className='text-center font-bold text-2xl'>Announcements</h1>
            {announcements.map(announcement => (
                <Announcement key={announcement.id} title={announcement.title} desc={announcement.description} time={announcement.date} />
            ))}
        </div>
    )
}

export default Announcements