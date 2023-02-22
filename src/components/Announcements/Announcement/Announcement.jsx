import React from 'react'
import moment from 'moment/moment';

const Announcement = ({title, desc , time}) => {

    
    return (
        <div className='w-full border-2 shadow-sm rounded-md my-4 p-3 hover:shadow-md transition-shadow'>
            <h1 className='text-md md:text-xl font-bold'>{title}</h1>
            <p className='text-sm md:text-lg'>{desc}</p>
            <p className='text-gray-400 text-xs'>{moment.unix(time.seconds).format("DD MMM YYYY hh:mm a")}</p>
        </div>
    )
}

export default Announcement