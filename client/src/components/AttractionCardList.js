/**Groups top attractions per classification on homepage
 * - displays title of classification and link to events
 */

import React from 'react';
// import { useDispatch } from 'react-redux';
// import { searchEvents } from '../actions/actionCreators';
import AttractionCard from './AttractionCard';
// import { useNavigate } from 'react-router-dom';

const AttractionCardList = ({ title, attractions }) => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleSeeAll = title => {
    //     if (title === 'Arts & Theatre') title = 'arts&theatre';
    //     dispatch(searchEvents({classificationName: title.toLowerCase()}));
    //     history.push({
    //         pathname: '/search',
    //         search: `?classificationName=${title.toLowerCase()}`
    //     });   
    // };

    return (
        <div className='w-full flex flex-col items-center'>
            <div>
                <div className='mb-4 text-xl'>
                    <h3 className='font-bold'>{title}</h3>
                </div>
                <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
                    {attractions.map(a => (
                                <AttractionCard 
                                    name={a.name} 
                                    img={a.images[1].url} 
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