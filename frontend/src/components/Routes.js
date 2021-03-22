/**App routes */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Profile from './Profile';
import SearchResults from './SearchResults';
import AttractionDetail from './AttractionDetail';
import EditProfileForm from './EditProfileForm';
import FriendsList from './FriendsList';
import ArtistsList from './ArtistsList';
import EventDetail from './EventDetail';
import FindFriends from './FindFriends';

const Routes = () => {
    return (        
        <Switch>
            <Route path='/register'>
                <RegisterForm />
            </Route>
            <Route path='/login'>
                <LoginForm />
            </Route>
            <Route path='/profile/edit'>
                <EditProfileForm />
            </Route>
            <Route path='/profile/friends'>
                <FriendsList />
            </Route>
            <Route path='/profile/artists'>
                <ArtistsList />
            </Route>
            <Route path='/profile'>
                <Profile />
            </Route>
            <Route path='/users/search'>
                <FindFriends />
            </Route>
            <Route path='/search'>
                <SearchResults />
            </Route>
            <Route path='/attraction/:attractionId'>
                <AttractionDetail />
            </Route>
            <Route path='/events/:eventId'>
                <EventDetail />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;