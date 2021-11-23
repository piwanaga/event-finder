/**Card that displays basic event info
 * - name
 * - venue
 * - date/time
 * - 'get tickets' button
 */

import React from 'react';
import dayjs from 'dayjs';

const EventCard = ({ name, id, img, date, time, venue, ticketUrl}) => {

    return (
        <div className='border-b flex justify-between py-4 px-2 hover:bg-gray-100 sm:grid sm:grid-cols-6 sm:gap-2'>
            <div className='hidden sm:inline'>
                <img alt={name} src={img} className='w-24 rounded'/>
            </div>
            <div className='flex flex-col sm:col-span-4 md:grid md:grid-cols-6'>
                <div className='mr-10 flex items-baseline md:flex-col md:col-span-2'>
                    <p className='text-indigo-600 font-semibold mr-3 uppercase'>{dayjs(date).format('MMM D')}</p>
                    <p className='text-gray-500'>{dayjs(`${date} ${time}`).format('ddd h:mm a')}</p>
                </div>
                <div className='pr-2 md:col-span-4'>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-gray-500 text-sm'>{venue}</p>
                </div>
            </div>
            <div className='mt-1'>
                <a href={ticketUrl} target='_blank' rel='noreferrer'>
                    <button className='bg-blue-600 px-6 py-2 tracking-wider rounded text-white hover:bg-blue-800 transition-colors ease-in-out duration-200'>Tickets</button>
                </a>
            </div>
        </div>
    );
};

export default EventCard;