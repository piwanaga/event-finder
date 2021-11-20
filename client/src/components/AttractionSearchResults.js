/**Search results for events
 * - shown when searching using search bar and when viewing attraction details
 * - renders EventCards
 */

import React from 'react';
import { useSelector } from 'react-redux';
// import { loadMore, searchEvents } from '../actions/actionCreators';
// import { useLocation } from 'react-router-dom';
// import queryString from 'query-string';
import AttractionCardSmall from './AttractionCardSmall';
// import SearchFilters from './SearchFilters';

const AttractionSearchResults = ({attractionId, attractionName}) => {
    // const dispatch = useDispatch();
    const searchResults = useSelector(store => store.searchReducer);
    const attractions = searchResults.attractions

    
    // const { search } = useLocation();
    // const { location, keyword, classificationName } = queryString.parse(search);

    // useEffect(() => {
    //     if (!attractionId) {
    //         if (events.length === 0) dispatch(searchEvents(queryString.parse(search)));
    //     };
    // }, [])

    return (
        <>
            {attractions ?
                attractions.map(a => (
                    <div key={a.id}>
                        <AttractionCardSmall 
                            name={a.name}
                            segment={a.classifications[0].segment ? a.classifications[0].segment.name : null}
                            genre={a.classifications[0].genre ? a.classifications[0].genre.name : null}
                            img={a.images[0].url}
                            id={a.id}
                        />
                    </div>
                )) :
                <p>Couldn't find anything matching your search.</p>
            }
        </>
    );
};

export default AttractionSearchResults;