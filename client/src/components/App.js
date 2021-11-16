import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser, getAttractions } from '../actions/actionCreators';
import RoutesComponent from './RoutesComponent';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem('token') || null;

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     console.log('geolocation not supported')
  //   }
  // }

  // const showPosition = pos => {
  //   console.log(`latitude: ${pos.coords.latitude}, longitude: ${pos.coords.longitude}`)
  // }

  useEffect(() => {
    if (storedToken) {
      dispatch(getUser(storedToken));
    };
    // getLocation()
    dispatch(getAttractions());
  }, [storedToken, dispatch]);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='mb-10'>
        <Header />
      </div>  
      <div className=''>
        <RoutesComponent />
      </div>
      <div className='flex flex-grow' />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
