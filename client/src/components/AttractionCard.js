/**Card displayed on homepage that shows attraction name, image and event count
 * - rendered by AttractionCardList
 */

import React from 'react';
import { Link } from 'react-router-dom';

const AttractionCard = ({ name, img, id, eventCount }) => {
   
    return (
        <div className='relative w-full rounded group h-28 overflow-hidden sm:h-44 md:h-32 xl:h-48'>
            <Link to={`/attraction/${id}`}>
                <img src={img} alt={`${name}`} className='h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110' />
                <div className='absolute bottom-0 bg-gray-900 bg-opacity-40 text-white rounded ml-2 mb-2 p-2'>
                    <p className='font-semibold text-sm sm:text-base'>{name}</p>
                    <p className='text-xs sm:text-sm'>{eventCount} events</p>
                </div>
                </Link>
        </div>
    );
};

export default AttractionCard;