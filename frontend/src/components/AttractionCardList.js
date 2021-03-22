/**Groups top attractions per classification on homepage
 * - displays title of classification and link to events
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { searchEvents } from '../actions/actionCreators';
import AttractionCard from './AttractionCard';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    headingArea: {
        justifyContent: 'space-around',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'space-between'
        } 
    },
    title: {
        marginBottom: 20
    },
    cardContainer: {
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'space-between',
        }
    } 
}));

const AttractionCardList = ({ title, attractions }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSeeAll = title => {
        if (title === 'Arts & Theatre') title = 'arts&theatre';
        dispatch(searchEvents({classificationName: title.toLowerCase()}));
        history.push({
            pathname: '/search',
            search: `?classificationName=${title.toLowerCase()}`
        });   
    };

    return (
        <Grid container direction='column'>
            <Grid item container direction='row' className={classes.headingArea}>
                <Grid item>
                    <Typography variant='h5' className={classes.title}>{title}</Typography>
                </Grid>
                <Grid item>
                    <Button onClick={() => handleSeeAll(title)} color='primary'>See All {title} Events</Button>
                </Grid>
            </Grid>
            <Grid item container direction='row' className={classes.cardContainer}>
                {attractions.map(a => (
                    <Grid item key={a.id} >
                        <AttractionCard 
                            name={a.name} 
                            img={a.images[1].url} 
                            eventCount={a.upcomingEvents._total}
                            id={a.id}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default AttractionCardList;