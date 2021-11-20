/**Homepage
 * - renders AttractionCardList
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { getUser, getAttractions } from '../actions/actionCreators';
import AttractionCardList from './AttractionCardList';
import FavoriteArtistsHome from './FavoriteArtistsHome';
import EventsSearchResultsHome from './EventSearchResultsHome';

const Home = () => {
    const dispatch = useDispatch();
    const attractions = useSelector(store => store.attractionsReducer.attractionsHome);
    const user = useSelector(store => store.userReducer.user);
    const storedToken = localStorage.getItem('token') || null;

    useEffect(() => {
        if (storedToken) {
          dispatch(getUser(storedToken));
        };
        // getLocation()
        dispatch(getAttractions());
      }, [storedToken, dispatch, user.loggedIn]);

    return (
        <div className='flex justify-center w-full'>
            <div className='px-3 flex flex-col lg:w-5/6 xl:w-2/3'>
                <div className='flex flex-col'>
                    <h3 className='text-2xl font-semibold mb-6'>Top Selling</h3>
                    {Object.keys(attractions).map(a => (
                        <div key={a} className='mb-10 w-full'>
                            <AttractionCardList title={attractions[a].title} attractions={attractions[a].attractions} />
                        </div>
                    ))}
                </div>
                <div>
                    {user.artists ? 
                        user.artists.length ?
                            <div className='mb-10 w-full'>
                                <FavoriteArtistsHome artists={user.artists}/>
                            </div> :
                            null :
                        null
                    } 
                </div>
            </div>
        </div>
    )
};

export default Home;
