/**App routes */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import RegisterForm from './RegisterForm';
import Profile from './Profile';
import SearchResults from './SearchResults';
import AttractionDetail from './AttractionDetail';
import Discover from './Discover';
import LoginForm from './LoginForm';
// import EditProfileForm from './EditProfileForm';
// import ArtistsList from './ArtistsList';
// import EventDetail from './EventDetail';

const RoutesComponent = () => {
    return (    
        <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/attraction/:attractionId' element={<AttractionDetail />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/discover' element={<Discover />}/>
            <Route path='/' element={<Home />}/>
        </Routes>    
    );
};

export default RoutesComponent;