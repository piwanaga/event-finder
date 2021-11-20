import React, { useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import AttractionSearchResults from './AttractionSearchResults';
import EventSearchResults from './EventSearchResults';

const SearchResults = () => {
    const [activeLink, setActiveLink] = useState('attractions');
    const { search } = useLocation();
    let { keyword } = queryString.parse(search);

    const handleAttractionsClick = () => {
        setActiveLink('attractions')
    }

    const handleEventsClick = () => {
        setActiveLink('events')
    }

    return (
        <div className='flex justify-center px-3'>
            <div className='w-full md:w-4/5 lg:w-3/5'>
                <div className='text-2xl mb-8'>
                    <p>Searching for <span className='font-semibold text-indigo-700'>"{keyword}"</span></p>
                </div>
                <div className='flex text-xl'>
                    <button onClick={handleAttractionsClick} className={`mb-8 mr-6 py-2 ${activeLink === 'attractions' ? 'border-b-4 border-blue-500' : 'border-b-4 border-transparent'}`}>Attractions</button>
                    <button onClick={handleEventsClick} className={`mb-8 py-2 ${activeLink === 'events' ? 'border-b-4 border-blue-500' : 'border-b-4 border-transparent'}`}>Events</button>
                </div>
                <div>
                    {activeLink === 'attractions' ? 
                        <AttractionSearchResults /> :
                        <EventSearchResults />
                    }
                </div>
            </div>
        </div>
    )
};

export default SearchResults;