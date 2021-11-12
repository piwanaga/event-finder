/**User profile
 * - displays:
 *      - basic user info
 *      - friends
 *      - artists following
 * - links to edit profile, view/find friends, view artists following
 */

import React from 'react';
import FavoriteArtistsList from './FavoriteArtistsList';


const Profile = () => {
    

    return (
        <div className='flex justify-center px-3'>
            <div className='w-full md:w-4/5 lg:w-4/6 xl:w-3/5'>
                <FavoriteArtistsList />
            </div>
            
        </div>
    )
};

export default Profile;