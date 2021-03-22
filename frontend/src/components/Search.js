/**Search bar rendered in Header
 * - allows searching by keyword and location
 *    - location can be city name or zipcode
 */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Paper, IconButton, InputBase, Divider, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { searchEvents } from '../actions/actionCreators';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 10px',
      width: 'auto',
      [theme.breakpoints.up('md')]: {
        width: 700,
      }
    },
    input: {
      width: '100%'
    },
    location: {
      flex: 1
    },
    keyword: {
      flex: 2
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 10,
    },
    textField: {
      outline: 'none'
    }
}));
  
const Search = () => {
    const classes = useStyles();
    const { search } = useLocation();
    const { location, keyword } = queryString.parse(search);

    const INITIAL_STATE = {
      location: '',
      keyword: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
      setFormData({
        location: location || '',
        keyword: keyword || ''
      })
    }, [search])

    const handleChange = evt => {
      const {name, value} = evt.target
      setFormData(data => ({...data, [name]: value}))
    };

    const handleSubmit = evt => {
      evt.preventDefault();
      try {
        dispatch(searchEvents(formData));
        history.push({
          pathname: '/search',
          search: `?location=${formData.location}&keyword=${formData.keyword}`
        });
      } catch (e) {
        console.log(e)
      };
    };

    return (
        <Paper className={classes.root}>
          <form onSubmit={handleSubmit}>
          <Grid container direction='row' alignItems='center' justify='flex-end'>
            <Grid item className={classes.location}>
              <InputBase
                className={classes.input}
                name='location'
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter city or zip"
                inputProps={{ 'aria-label': 'search location' }}
                endAdornment={<LocationOnIcon/>}
              />
            </Grid>
            <Grid item>
              <Divider orientation='vertical' className={classes.divider}/>
            </Grid>
            <Grid item container justify='flex-end' className={classes.keyword}>
              <InputBase
                className={classes.input}
                name='keyword'
                value={formData.keyword}
                onChange={handleChange}
                placeholder="Search things to do"
                inputProps={{ 'aria-label': 'search keywords' }}
                endAdornment={
                  <IconButton type='submit' className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                }
              />
            </Grid>
          </Grid>
          </form>
        </Paper>
    );
};

export default Search;