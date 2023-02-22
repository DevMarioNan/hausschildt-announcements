import React from 'react'
import moment from 'moment/moment';

const Announcement = ({title, desc , time}) => {

    
    return (
        <div className='w-full border-2 shadow-sm rounded-md my-4 p-3 hover:shadow-md dark:hover:shadow-[1px_1px_15px_2px_#22d3ee] transition-shadow dark:bg-black dark:text-white'>
            <h1 className='text-md md:text-xl font-bold transition'>{title}</h1>
            <p className='text-sm md:text-lg transition'>{desc}</p>
            <p className='text-gray-400 text-xs transition'>{moment.unix(time.seconds).format("DD MMM YYYY hh:mm a")}</p>
        </div>
    )
}

export default Announcement