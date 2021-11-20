/**Search results for events
 * - shown when searching using search bar and when viewing attraction details
 * - renders EventCards
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMore, searchEvents } from '../actions/actionCreators';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import EventCard from './EventCard';

const EventSearchResults = ({attractionId, attractionName}) => {
    
    const dispatch = useDispatch();
    const searchResults = useSelector(store => store.searchReducer);
    const events = searchResults.events;

    let loadMoreLink
    searchResults.link ?  loadMoreLink = searchResults.link.href : loadMoreLink = null
    const { search } = useLocation();
    const { location, keyword } = queryString.parse(search);

    useEffect(() => {
        if (!attractionId) {
            if (events.length === 0) dispatch(searchEvents(queryString.parse(search)));
        };
    }, [attractionId, dispatch, events.length, search])

    const handleLoadMore = () => {
        dispatch(loadMore(loadMoreLink));
    };

    return (
        <>
        {events ? 
            <div className=''>
                
                {attractionName &&
                    <p className='mb-10 font-semibold text-xl'>
                        Upcoming Events for {attractionName}
                    </p>
                }
                {events.length === 0 ? 
                    <div>
                        {keyword || location ? 
                        <p>Unfortunately, there are no upcoming events for {keyword} matching your criteria.</p> :
                        <p>Unfortunately, there are no upcoming events for this artist.</p>
                        }
                    </div> :
                    <>
                    {events.map(e => (
                    <div key={e.id}>
                        <EventCard 
                            name={e.name} 
                            date={e.dates.start.localDate}
                            time={e.dates.start.localTime}
                            img={e.images[2].url}
                            id={e.id}
                            ticketUrl={e.url}
                            venue={e._embedded ? e._embedded.venues[0].name : null}
                        />
                    </div>
                    ))}
                    </>
                }
                {loadMoreLink &&
                <div className='flex justify-center'>
                    <div className='flex justify-center w-1/2 my-10'>
                        <button onClick={handleLoadMore} className='w-full py-2 px-4 border border-blue-400 rounded hover:bg-blue-400 hover:text-white'>Load More</button>
                    </div>
                </div>
                }
            </div> :
            null
        }
        </>
    );
};

export default EventSearchResults;