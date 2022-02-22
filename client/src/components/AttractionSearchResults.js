/**Search results for events
 * - shown when searching using search bar and when viewing attraction details
 * - renders EventCards
 */

import React from 'react';
import { useSelector } from 'react-redux';
import AttractionCardSmall from './AttractionCardSmall';

const AttractionSearchResults = ({attractionId, attractionName}) => {
    const searchResults = useSelector(store => store.searchReducer);
    const attractions = searchResults.attractions

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