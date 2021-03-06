/**User reducer handles all changes to user data in state
 * - username, first name, last name, email, photo url
 * - friends
 * - artists following
 * - is logged in
 */

import { 
        CREATE_USER, 
        GET_USER, 
        UPDATE_USER, 
        LOGIN_USER, 
        LOGOUT_USER, 
        ADD_ARTIST, 
        REMOVE_ARTIST, 
        ADD_FRIEND, 
        REMOVE_FRIEND 
       } from "../actions/actionTypes";

const INITIAL_STATE = {
    user: {
        loggedIn: false,
        friends: [],
        artists: []
    }
};

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_USER:
            return {...state, user: {...action.user, loggedIn: true}};
        case LOGIN_USER:
            return {...state, user: {...action.user, loggedIn: true}};
        case GET_USER:
            return {...state, user: {...action.user, loggedIn: true}};
        case UPDATE_USER:
            return {...state, 
                user: {
                    ...state.user,
                    firstName: action.user.firstName,
                    lastName: action.user.lastName,
                    email: action.user.email,
                    photoUrl: action.user.photoUrl,
                }
            };
        case LOGOUT_USER:
            return INITIAL_STATE;
        case ADD_ARTIST:
            return {...state, user: {...state.user, artists: [...state.user.artists, action.artist]}};
        case REMOVE_ARTIST:
            return {...state, user: {...state.user, artists: state.user.artists.filter(a => a.id !== action.id)}};
        case ADD_FRIEND:
            return {...state, user: {...state.user, friends: [...state.user.friends, action.newFriend]}};
        case REMOVE_FRIEND:
            return {...state, user: {...state.user, friends: state.user.friends.filter(f => f.username !== action.username)}}
        default:
            return state
    };
};

export default userReducer;