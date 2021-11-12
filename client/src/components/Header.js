/**Header 
 * - nav links
 * - renders search bar
*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/actionCreators';
import { searchEvents } from '../actions/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Search from './Search';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.userReducer.user);
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/')
    };

    const renderUserLinks = () => {
        if (user.loggedIn) {
            return (
                <>
                <li className='nav-item px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75'>
                    <Link to='/profile'>
                        <button className='font-semibold mr-4'>My Profile</button>
                    </Link>
                </li>
                <li className='nav-item px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75'>
                    <button onClick={handleLogout} className='font-semibold'>Logout</button>
                </li>
                </>
            );
        } else {
            return(
                <>
                {/* <Link to='/register'>
                    <button className='mr-6 font-semibold'>Register</button>
                </Link> */}
                <li className='nav-item px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75'>
                    <Link to='/login'>
                        <button className='font-semibold'>Login</button>
                    </Link>
                </li>
                </>
            );
        };
    };

    const navigate = useNavigate()
    const handleClick = title => {
        dispatch(searchEvents({classificationName: title}));
        navigate({
            pathname: '/discover',
            search: `?classificationName=${title}`
        });   
    };
    
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 lg:py-6 bg-blue-500 mb-3">
            <div className="container px-2 mx-auto flex flex-wrap items-center justify-between lg:px-0">
                <div className="w-full px-1 relative flex justify-between lg:px-0 lg:w-auto lg:static lg:block lg:justify-start lg:mr-6">
                    <Link
                        to='/'
                        className="font-semibold text-2xl italic leading-relaxed inline-block py-2 whitespace-nowrap text-white"
                    >
                    EventFinder
                    </Link>
                    
                    <button
                        className="text-white cursor-pointer text-2xl leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
                <div
                    className={
                        "flex-col flex-grow items-start lg:flex lg:flex-row lg:justify-between" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <div className='lg:flex lg:flex-row'>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <Search/>
                            <li className="nav-item lg:ml-6">
                                <button onClick={() => handleClick('music')} className='px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75'>Concerts</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleClick('sports')} className='px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75'>Sports</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleClick('arts&theatre')} className='px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75'>Arts & Theater</button>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:flex lg:flex-row'>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {renderUserLinks()}
                        </ul>
                    </div>
                    
                            
                            
                    
                    
                </div>
            </div>  
        </nav>
    );
};

export default Header;