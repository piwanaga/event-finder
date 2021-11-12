/**Card that displays basic event info
 * - name
 * - venue
 * - date/time
 * - 'get tickets' button
 */

import React from 'react';
import { Link } from 'react-router-dom';

const AttractionCardSmall = ({ name, segment, genre, img, id }) => {

    return (
        <Link to={`/attraction/${id}`}>
            <div className='border-b flex items-center hover:bg-gray-200 py-4'>
                <div className='mr-10'>
                    <img src={img} alt={name} className='w-20'/>
                </div>
                <div>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-gray-500 text-sm'>{segment} / {genre}</p>
                </div>
            </div>
        </Link>
    );
};

export default AttractionCardSmall;