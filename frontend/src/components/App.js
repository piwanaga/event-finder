/**App component
 * - on mount gets user data from redux store
 * - on mount gets attractions data from redux store
 * - renders Header, Footer, Routes
 */

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getAttractions } from '../actions/actionCreators';

import Routes from './Routes';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  grow: {
    flexGrow: 1
  }
}));

const App = () => {
  const classes = useStyles();  
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem('token') || null;
  const user = useSelector(store => store.userReducer.user);
  const musicAttractions = useSelector(store => store.attractionsReducer.attractionsHome.music.attractions)

  useEffect(() => {
    if (storedToken) {
      dispatch(getUser(storedToken));
    };
    dispatch(getAttractions());
  }, [storedToken]);

  return (
    <div className={classes.root}>
      {user && musicAttractions.length ? 
      <>
        <Header />
        <Routes />
        <div className={classes.grow}/>
        <Footer />
      </> :
      null }
    </div>  
  );
};

export default App;
