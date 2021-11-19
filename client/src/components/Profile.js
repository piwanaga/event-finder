/**User profile
 * - displays:
 *      - basic user info
 *      - friends
 *      - artists following
 * - links to edit profile, view/find friends, view artists following
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeArtist } from '../actions/actionCreators';
import FavoriteArtistsProfile from './FavoriteArtistsProfile';


const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.userReducer.user);
    const artists = user.artists;

    const handleUnfollow = id => {
        dispatch(removeArtist({
            id: id,
            username: user.email
        }));
    };

    return (
        <div className='flex justify-center px-3'>
            <div className='w-full md:w-4/5 lg:w-4/6 xl:w-3/5'>
                <FavoriteArtistsProfile artists={artists} handleUnfollow={handleUnfollow}/>
            </div>
            
        </div>
    )
};

export default Profile;