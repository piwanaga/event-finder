/**Filters to be shown when searching events
 * - rendered by SearchResults
 * - filters for date, classification, radius, sort by
 */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchEvents } from '../actions/actionCreators';
import dayjs from 'dayjs';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

const EventFilters = ({ attractionId }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    let { location, keyword, startDateTime, sort, radius, classificationName } = queryString.parse(search);
    if (classificationName === 'arts') classificationName = 'arts&theatre';

    const INITIAL_STATE = {
        startDateTime: startDateTime || dayjs().format(),
        location: location || '',
        classificationName: classificationName || 'all',
        sort: sort || 'date,asc',
        radius: radius || '50'
    };

    const [filterData, setFilterData] = useState(INITIAL_STATE);

    useEffect(() => {
        setFilterData(INITIAL_STATE)
    }, [location, keyword, classificationName, startDateTime]);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFilterData(data => ({...data, [name]: value}))
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (attractionId) {
            dispatch(searchEvents({ 
                attractionId, 
                startDateTime: dayjs(filterData.startDateTime).format()}));
        } else {
            dispatch(searchEvents({
                ...queryString.parse(search), 
                ...filterData, 
                classificationName: filterData.classificationName === 'all' ? '' : filterData.classificationName,
                startDateTime: dayjs(filterData.startDateTime).format()}));
            navigate({
                pathname: '/discover',
                search: `?location=${filterData.location || ''}&keyword=${keyword || ''}&startDateTime=${dayjs(filterData.startDateTime).format()}&classificationName=${filterData.classificationName}&sort=${filterData.sort}&radius=${filterData.radius}`
            });
        };
    };
    
    return (
        <div className='sm:w-1/2 xl:w-1/3'>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div className='mb-2'>
                    <input 
                        type='text'
                        name='location'
                        id='location'
                        value={filterData.location}
                        onChange={handleChange}
                        placeholder='Enter city or zip'
                        className='border-gray-500 rounded mb-2 w-full'
                    />
                    <input 
                        type='date'
                        id='datePicker'
                        name='startDateTime'
                        value={filterData.startDateTime}
                        onChange={handleChange}
                        className='border-gray-500 rounded w-full'
                    />
                </div>
                <div>
                    <button className='bg-gray-200 px-3 py-2 rounded text-gray-700 text-sm ml-1'>Apply Filters</button>
                </div>
            </div>
            </form>
            
        </div>
    );
};

export default EventFilters;