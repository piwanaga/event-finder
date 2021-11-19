/**Search bar rendered in Header
 * - allows searching by keyword and location
 *    - location can be city name or zipcode
 */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { searchEvents, searchAttractions } from '../actions/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    
    const { search } = useLocation();
    const { location, keyword } = queryString.parse(search);

    const INITIAL_STATE = {
    location: '',
    keyword: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
    setFormData({
        location: location || '',
        keyword: keyword || ''
    })
    }, [search, keyword, location])

    const handleChange = evt => {
    const {name, value} = evt.target
    setFormData(data => ({...data, [name]: value}))
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        try {
            dispatch(searchAttractions(formData));
            dispatch(searchEvents(formData));
            navigate({
                pathname: '/search',
                // search: `?location=${formData.location}&keyword=${formData.keyword}`,
                search: `?keyword=${formData.keyword}`
            });
        } catch (e) {
            console.log(e)
        };
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className='flex items-center'>
                    <input 
                        type='text'
                        placeholder='Search events and attractions'
                        name='keyword'
                        value={formData.keyword}
                        onChange={handleChange}
                        className='rounded bg-white placeholder-opacity-80 w-72 px-4 py-2 mr-3 lg:mr-2'
                    />
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl text-white'/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;