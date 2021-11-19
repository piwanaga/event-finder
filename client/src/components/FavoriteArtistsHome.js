import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteArtistsHome = ({ artists }) => {
    return (
        <div className='w-full flex flex-col'>
            <div>
                <div className='mb-4 text-xl'>
                    <h3 className='font-bold'>My Artists</h3>
                </div>
                <div className='w-full md:grid md:grid-cols-2 md:gap-2'>
                    {artists.map(a => (
                        <Link to={`/attraction/${a.id}`} key={a.id}>
                            <div className='w-full border rounded flex items-center justify-between mb-2 py-2 px-2 hover:bg-gray-100'>
                                <div className='flex items-center'>
                                    <div className=''>
                                        <img alt={a.name} src={a.photoUrl} className='w-16 rounded mr-4 md:mr-10'/>
                                    </div>
                                    <div className='pr-4'>
                                        <p className='text-sm sm:text-base font-semibold'>{a.name}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default FavoriteArtistsHome;