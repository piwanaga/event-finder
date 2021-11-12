/**Homepage
 * - renders AttractionCardList
 */

 import React from 'react';
 import { useSelector } from 'react-redux'; 
 import AttractionCardList from './AttractionCardList';

 
const Home = () => {
    const attractions = useSelector(store => store.attractionsReducer.attractionsHome);
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full px-3'>
            {Object.keys(attractions).map(a => (
                <div key={a} className='mb-10'>
                    <AttractionCardList title={attractions[a].title} attractions={attractions[a].attractions} />
                </div>
            ))}
            </div>
        </div>
    )
};

export default Home;
