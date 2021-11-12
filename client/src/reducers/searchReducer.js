/**Search reducer handles searches of events and users
 * - events from search bar or attraction details
 * - event details
 * - users when searching users by usernames
 */

import { SEARCH_EVENTS, SEARCH_ATTRACTIONS, LOAD_MORE, GET_EVENT_DETAIL, SEARCH_USERS, CLEAR_SEARCH_USERS } from '../actions/actionTypes';

const INITIAL_STATE = {
    events: [],
    link: '',
    eventDetail: {},
    attractions: [],
    users: []
};

const searchReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_EVENTS:
            let events
            action.searchResults._embedded ? events = action.searchResults._embedded.events : events = []
            return {...state, events: events, link: action.searchResults._links.next}
        case LOAD_MORE:
            return {...state, events: [...state.events, ...action.results._embedded.events], link: action.results._links.next}
        case GET_EVENT_DETAIL:
            return {...state, eventDetail: action.eventDetail}
        case SEARCH_ATTRACTIONS:
            return {...state, attractions: action.searchAttractionsResults._embedded.attractions}
        case SEARCH_USERS:
            return {...state, users: action.users}
        case CLEAR_SEARCH_USERS:
            return {...state, users: []}
        default:
            return state
    };
};

export default searchReducer;