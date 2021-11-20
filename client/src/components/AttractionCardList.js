/**Groups top attractions per classification on homepage
 * - displays title of classification and link to events
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { searchEvents } from '../actions/actionCreators';
import AttractionCard from './AttractionCard';
import { useNavigate } from 'react-router-dom';

const AttractionCardList = ({ title, attractions }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSeeAll = title => {
        if (title === 'Arts & Theatre') title = 'arts&theatre';
        dispatch(searchEvents({classificationName: title.toLowerCase()}));
        navigate({
            pathname: '/discover',
            search: `?classificationName=${title.toLowerCase()}`
        });   
    };

    const getImage = images => {
        const isCorrectSize = element => element.width === 640
        const idx = images.findIndex(isCorrectSize)
        return images[idx].url
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <div>
                <div className='flex justify-between'>
                    <div className='mb-4 text-xl'>
                        <h3 className='font-semibold'>{title}</h3>
                    </div>
                    <div>
                        <button 
                            onClick={() => handleSeeAll(title)}
                            className='text-sm text-blue-500 font-semibold transition-colors duration-200 ease-in-out hover:text-blue-600'
                        >
                            See All {title}
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
                    {attractions.map(a => (
                                <AttractionCard 
                                    name={a.name} 
                                    img={getImage(a.images)} 
                                    eventCount={a.upcomingEvents._total}
                                    id={a.id}
                                    key={a.id}
                                />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default AttractionCardList;