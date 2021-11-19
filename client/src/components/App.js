import React from 'react';
import RoutesComponent from './RoutesComponent';
import Header from './Header';
import Footer from './Footer';

const App = () => {
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
