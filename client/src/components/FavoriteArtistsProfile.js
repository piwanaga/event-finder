import React from 'react';

const FavoriteArtistsProfile = ({artists, handleUnfollow}) => { 
    return (
        <>
        {artists ?
            <div className='sm:px-3'>
                <h2 className='text-2xl font-semibold mb-10'>My Artists</h2>
                {artists.length ?
                    artists.map(a => (
                    <div key={a.id} className='border-b flex items-center justify-between py-4 px-1 hover:bg-gray-100'>
                        <div className='flex items-center'>
                            <div className=''>
                                <img alt={a.name} src={a.photoUrl} className='w-16 md:w-24 rounded mr-4 md:mr-10'/>
                            </div>
                            <div className='pr-4'>
                                <p className='text-sm sm:text-base font-semibold'>{a.name}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleUnfollow(a.id)} className='text-sm text-red-500 hover:underline'>
                                Remove
                            </button>
                        </div>
                    </div>
                )) :
                <h4 className='italic text-gray-800'>You haven't added any artists yet! You can click the heart icon on an artist's page to keep up to date with their events.</h4>
                }
            </div> :
        null
        }
        </>
    )
};

export default FavoriteArtistsProfile;