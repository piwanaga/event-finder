/**Search results for events
 * - shown when searching using search bar and when viewing attraction details
 * - renders EventCards
 */

import React, { useEffect } from 'react';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { loadMore, searchEvents } from '../actions/actionCreators';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import EventCard from './EventCard';
import SearchFilters from './SearchFilters';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '0px 10px'
    },
    loadButton: {
        marginTop: 30,
        width: 300
    },
    heading: {
        margin: '30px 20px'
    },
    eventsPaper: {
        paddingTop: 10
    },
    noEventsPaper: {
        padding: 30
    }
}));

const SearchResults = ({attractionId, attractionName}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const searchResults = useSelector(store => store.searchReducer);
    const events = searchResults.events;

    let loadMoreLink
    searchResults.link ?  loadMoreLink = searchResults.link.href : loadMoreLink = null
    const { search } = useLocation();
    const { location, keyword, classificationName } = queryString.parse(search);

    useEffect(() => {
        if (!attractionId) {
            if (events.length === 0) dispatch(searchEvents(queryString.parse(search)));
        };
    }, [])

    const handleLoadMore = () => {
        dispatch(loadMore(loadMoreLink));
    };

    return (
        <div>
            {events ? 
            <Grid container direction='column' alignItems='center' className={classes.root}>
                <Grid item container sm={9} md={10} lg={7} direction='column'>
                    <Grid item>
                        <SearchFilters attractionId={attractionId}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.eventsPaper}>
                            {classificationName && 
                                <Grid item>
                                    <Typography variant='h6' align='left' className={classes.heading}>
                                        {classificationName === 'arts' ? 
                                        'Upcoming Arts & Theatre events' : 
                                        `Upcoming ${classificationName.charAt(0).toUpperCase() + classificationName.slice(1)} events`}
                                    </Typography>
                                </Grid>
                            }
                            {attractionName &&
                                <Grid item>
                                    <Typography variant='h6' className={classes.heading}>
                                        Upcoming Events for {attractionName}
                                    </Typography>
                                </Grid>
                            }
                            {events.length === 0 ? 
                                <Grid item>
                                    <Paper className={classes.noEventsPaper}>
                                        {keyword || location ? 
                                        <Typography>Unfortunately, there are no upcoming events for {keyword} matching your criteria.</Typography> :
                                        <Typography>Unfortunately, there are no upcoming events for this artist.</Typography>
                                        }
                                    </Paper>
                                </Grid> :
                                events.map(e => (
                                <Grid item key={e.id}>
                                    <EventCard 
                                        name={e.name} 
                                        date={e.dates.start.localDate}
                                        time={e.dates.start.localTime}
                                        img={e.images[2].url}
                                        id={e.id}
                                        ticketUrl={e.url}
                                        venue={e._embedded ? e._embedded.venues[0].name : null}
                                    />
                                </Grid>
                                ))
                            }
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item>
                    {loadMoreLink && 
                    <Button 
                        color='primary' 
                        variant='outlined' 
                        size='large' 
                        onClick={handleLoadMore} 
                        className={classes.loadButton}>
                        Load More
                    </Button>}
                </Grid>
            </Grid> :
            null
        }
        </div>
    );
};

export default SearchResults;