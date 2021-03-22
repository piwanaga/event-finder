/**Filters to be shown when searching events
 * - rendered by SearchResults
 * - filters for date, classification, radius, sort by
 */

import React, { useState, useEffect } from 'react';
import { Grid, MenuItem, Select, FormControl, InputLabel, Button, makeStyles, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { searchEvents } from '../actions/actionCreators';
import dayjs from 'dayjs';
import DayJsUtils from '@date-io/dayjs';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 20,
        padding: '25px 15px'
    },
    input: {
        width: '100%'
    }
}))

const SearchFilters = ({ attractionId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { search, pathname } = useLocation();
    let { location, keyword, startDateTime, sort, radius, classificationName } = queryString.parse(search);
    if (classificationName === 'arts') classificationName = 'arts&theatre';
    
    const INITIAL_STATE = {
        startDateTime: startDateTime || dayjs().format(),
        classificationName: classificationName || 'all',
        sort: sort || 'relevance,desc',
        radius: radius || '50'
    };
    const [filterData, setFilterData] = useState(INITIAL_STATE);

    useEffect(() => {
        setFilterData(INITIAL_STATE)
    }, [location, keyword])

    const handleDateChange = date => {
        const formattedDate = dayjs(date).format('YYYY-MM-DDTHH:mm:ss')
        setFilterData(data => ({...data, startDateTime: formattedDate}));
    };

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFilterData(data => ({...data, [name]: value}))
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (attractionId) {
            dispatch(searchEvents({ 
                attractionId, 
                sort: filterData.sort,
                startDateTime: dayjs(filterData.startDateTime).format()}));
        } else {
            dispatch(searchEvents({
                ...queryString.parse(search), 
                ...filterData, 
                classificationName: filterData.classificationName === 'all' ? '' : filterData.classificationName,
                startDateTime: dayjs(filterData.startDateTime).format()}));
            history.push({
                pathname: '/search',
                search: `?location=${location || ''}&keyword=${keyword || ''}&startDateTime=${filterData.startDateTime}&classificationName=${filterData.classificationName}&sort=${filterData.sort}&radius=${filterData.radius}`
            });
        };
    };
    
    return (
        <Grid item>
            <Paper className={classes.root}>
            <form onSubmit={handleSubmit}>
                <Grid container direction='row' alignItems='center' spacing={2}>
                    <Grid item xs={12} md={3}>
                        <MuiPickersUtilsProvider utils={DayJsUtils}>
                            <KeyboardDatePicker
                                className={classes.input}
                                id="date-picker-dialog"
                                label="Start Date"
                                format="MM/DD/YYYY"
                                value={filterData.startDateTime}
                                disablePast
                                inputVariant='outlined'
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    {pathname.includes('attraction') ? null :
                        <Grid item xs={12} md={3}>
                            <FormControl variant='outlined' className={classes.input}>
                                <InputLabel>Event Type</InputLabel>
                                <Select
                                    value={filterData.classificationName}
                                    onChange={handleChange}
                                    name='classificationName'
                                    label='Event Type'
                                    id='classificationName'
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'music'}>Music</MenuItem>
                                    <MenuItem value={'sports'}>Sports</MenuItem>
                                    <MenuItem value={'films'}>Films</MenuItem>
                                    <MenuItem value={'arts&theatre'}>Arts & Theatre</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    }
                    {pathname.includes('attraction') ? null :
                        <Grid item xs={12} md={3}>
                            <FormControl variant='outlined' className={classes.input}>
                                <InputLabel>Distance</InputLabel>
                                <Select
                                    value={filterData.radius}
                                    onChange={handleChange}
                                    name='radius'
                                    label='Distance'
                                >
                                    <MenuItem value={5}>5 mi</MenuItem>
                                    <MenuItem value={10}>10 mi</MenuItem>
                                    <MenuItem value={25}>25 mi</MenuItem>
                                    <MenuItem value={50}>50 mi</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    }
                    <Grid item xs={12} md={3}>
                        <FormControl variant='outlined' className={classes.input}>
                            <InputLabel>Sort By</InputLabel>
                            <Select
                                value={filterData.sort}
                                onChange={handleChange}
                                name='sort'
                                label='Sort By'
                            >
                                <MenuItem value={'date,asc'}>Date</MenuItem>
                                <MenuItem value={'relevance,desc'}>Relevance</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button variant='outlined' type='submit'>Apply Filters</Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Grid>
    );
};

export default SearchFilters;