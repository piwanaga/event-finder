import axios from 'axios';
import { 
        CREATE_USER, 
        LOGIN_USER, 
        LOGIN_ERROR,
        CLEAR_LOGIN_ERROR,
        GET_USER, 
        UPDATE_USER, 
        LOGOUT_USER, 
        SEARCH_EVENTS, 
        LOAD_MORE, 
        SEARCH_ATTRACTIONS,
        GET_ATTRACTIONS, 
        GET_ATTRACTION_DETAILS, 
        ADD_ARTIST, 
        REMOVE_ARTIST, 
        GET_EVENT_DETAIL
       } 
       from './actionTypes';
import jwt from 'jsonwebtoken';
import TMApi from '../TMApi';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/**USER ACTIONS
 * - create new user
 * - login user
 * - logout user
 * - update user
 * - get user (using token in local storage)
 */

/**Create new user
 * - make request to backend with user data
 * - store token in localStorage
 */
export const createUser = user => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BASE_URL}/users/register`, user);
            localStorage.setItem('token', JSON.stringify(res.data.token));
            dispatch(createdUser(res.data.user));
        } catch (e) {
            console.log(e)
            return e
        };
    };
};

const createdUser = user => {
    return {
        type: CREATE_USER,
        user
    };
};

// /**Login user
//  * - store token in loalStorage
//  */
export const loginUser = data => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BASE_URL}/users/login`, data, 
            {headers: 
                {'Content-Type': 'application/json'}
            });
            localStorage.setItem('token', JSON.stringify(res.data.token));
            dispatch(loggedInUser(res.data.user));
        } catch (e) {
            console.log(e)
            dispatch(loginError()) 
        };
    };
};

const loggedInUser = user => {
    return {
        type: LOGIN_USER,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_ERROR,
        error: true
    }
}

export const clearLoginError = () => {
    return {
        type: CLEAR_LOGIN_ERROR
    };
};

// /**Logout user
//  * - remove token from localStorage
//  */
export const logoutUser = () => {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(loggedOutUser());
    };
};

const loggedOutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};

// /**Get user details
//  * - decode token in localStorage to get username
//  * - make request to backend to get user object
//  */
export const getUser = token => {
    return async dispatch => {
        try {
            const { username } = jwt.decode(JSON.parse(token));
            const res = await axios.get(`${BASE_URL}/users/${username}`);
            dispatch(gotUser(res.data.user));
        } catch (e) {
            console.log(e)
            return e
        }
    };
};

const gotUser = user => {
    return {
        type: GET_USER,
        user
    };
};

// /**Update user
//  * - make patch request to backend and update redux store
//  */
export const updateUser = (username, data) => {
    return async dispatch => {
        try {
            const res = await axios.patch(`${BASE_URL}/users/${username}`, data);
            dispatch(updatedUser(res.data.user));
        } catch (e) {
            console.log(e)
            return e
        };
    };
};

const updatedUser = user => {
    return {
        type: UPDATE_USER,
        user
    };
};

// /**USER FRIENDS AND ARTISTS AND ACTIONS
//  *  - add/remove artist from following
//  *  - add/remove friend
//  */

//  /**Add artist
//   * - make post request to backend with artist data
//   */
export const addArtist = data => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BASE_URL}/users/${data.username}/artists`, data);
            dispatch(addedArtist(res.data.artist))
        } catch (e) {
            console.log(e)
            return e
        };
    };
};

const addedArtist = artist => {
    return {
        type: ADD_ARTIST,
        artist
    };
};

export const removeArtist = data => {
    return async dispatch => {
        try {
            const res = await axios.delete(`${BASE_URL}/users/${data.username}/artists`, {data});
            dispatch(removedArtist(res.data.id));
        } catch (e) {
            console.log(e)
            return e
        };
    };
};

const removedArtist = id => {
    return {
        type: REMOVE_ARTIST,
        id
    };
};

/**Search actions 
 * - handle search
 * - load more results
*/

/**Search events
 * - call our TMApi class method with provided search data
 */
export const searchEvents = data => {
    return async dispatch => {
        try {
            const res = await TMApi.searchEvents(data);
            dispatch(searchResults(res));
        } catch (e) {
            console.log(e)
            return e
        };
    };   
};

const searchResults = (searchResults) => {
    return {
        type: SEARCH_EVENTS,
        searchResults
    };
};

export const searchAttractions = data => {
    return async dispatch => {
        try {
            const res = await TMApi.searchAttractions(data);
            dispatch(searchAttractionsResults(res));
        } catch (e) {
            console.log(e)
            return e
        };
    };   
};

const searchAttractionsResults = (searchAttractionsResults) => {
    return {
        type: SEARCH_ATTRACTIONS,
        searchAttractionsResults
    };
};

/**Load more events
 * - we don't want to load all search results on inital request, so loadMore will get the next set of results on request
 * - calls TMApi class method for loading more events
 */
export const loadMore = link => {
    return async dispatch => {
        try {
            const res = await TMApi.loadMore(link)
            dispatch(moreResults(res))
        } catch (e) {
            console.log(e)
            return e
        };
    };
};

const moreResults = results => {
    return {
        type: LOAD_MORE,
        results
    };
};

/**Get event details
 * - call TMApi class method with event id to get event details
 */
export const getEventDetail = id => {
    return async dispatch => {
        try {
            const res = await TMApi.getEventDetail(id);
            dispatch(gotEventDetail(res));
        } catch (e) {
            console.log(e)
            return e
        };
    };
};

const gotEventDetail = eventDetail => {
    return {
        type: GET_EVENT_DETAIL,
        eventDetail
    };
};

/**Search users
 * - search any registered users by username
 * - make ge request to backend search route
 */
// export const searchUsers = username => {
//     return async dispatch => {
//         try {
//             const res = await axios.get(`${BASE_URL}/users/search/${username}`);
//             dispatch(searchUsersResults(res.data.users));
//         } catch (e) {
//             console.log(e);
//             return e;
//         };
//     };
// };

// const searchUsersResults = users => {
//     return {
//         type: SEARCH_USERS,
//         users
//     };
// };

// /**Clear search results */
// export const clearSearchUsers = () => {
//     return {
//         type: CLEAR_SEARCH_USERS
//     };
// };

/**ATTRACTIONS ACTIONS
 * - get attractions for homepage
 * - get attraction details
 */

/**Get attractions for homepage
 * - get attractions for four main classifications to be displayed on homepage: music, sports, film, arts & theatre
 * - call getAttractions class method for each classification and add to attractions object to be added to redux store
 */
export const getAttractions = () => {
    return async dispatch => {
        try {
        let attractions = {}
            const musicRes = await TMApi.getAttractions('music');
            const sportsRes = await TMApi.getAttractions('sports');
            const filmRes = await TMApi.getAttractions('film');
            const artsAndTheatreRes = await TMApi.getAttractions('arts&theatre');

        attractions.music = musicRes._embedded.attractions
        attractions.sports = sportsRes._embedded.attractions
        attractions.films = filmRes._embedded.attractions
        attractions.artsAndTheatre = artsAndTheatreRes._embedded.attractions
        
        dispatch(gotAttractions(attractions))
        } catch (e) {
            console.log(e)
            return e
        };
    };
};

const gotAttractions = attractions => {
    return {
        type: GET_ATTRACTIONS,
        attractions
    };
};

/**Get attraction details
 * - using attraction id, call TMApi class method to get attraction details
 */
export const getAttractionDetails = id => {
    return async dispatch => {
        const res = await TMApi.getAttractionDetails(id);
        dispatch(gotAttractionDetails(res));
    };
};

const gotAttractionDetails = (attractionDetails=null) => {
    return {
        type: GET_ATTRACTION_DETAILS,
        attractionDetails
    };
};