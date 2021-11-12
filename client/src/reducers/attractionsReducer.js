/**Attractions reducer handles changes to attraction data in state
 * - main attractions shown on homepage
 * - attraction details shown on attraction detail page
*/

import { GET_ATTRACTIONS, GET_ATTRACTION_DETAILS } from '../actions/actionTypes';

const INITIAL_STATE = {
    attractionsHome: {
        music: {
            title: 'Music',
            attractions: []
        },
        sports: {
            title: 'Sports',
            attractions: []
        },
        films: {
            title: 'Films',
            attractions: []
        },
        artsAndTheatre: {
            title: 'Arts & Theatre',
            attractions: []
        }
    },
    details: {}
};

const attractionsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ATTRACTIONS:
            return {...state, 
                attractionsHome: {...state.attractionsHome,
                    music: {...state.attractionsHome.music, attractions: action.attractions.music}, 
                    sports: {...state.attractionsHome.sports, attractions: action.attractions.sports}, 
                    films: {...state.attractionsHome.films, attractions: action.attractions.films},
                    artsAndTheatre: {...state.attractionsHome.artsAndTheatre, attractions: action.attractions.artsAndTheatre}
                }
            };
        case GET_ATTRACTION_DETAILS:
                return {...state,
                        details: action.attractionDetails
                }
        default:
            return state    
    };
};

export default attractionsReducer;