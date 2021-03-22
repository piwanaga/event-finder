/**Details for an attraction to be shown on attraction page
 * - name
 * - genre
 * - faux rating
 * - follow button
 * - image
 * - event results
 */

import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAttractionDetails, searchEvents, addArtist, removeArtist } from '../actions/actionCreators';
import { makeStyles, Typography, Grid, Paper, Button } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import SearchResults from './SearchResults';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 10px',
        marginBottom: 30
    },
    attractionDetailRoot: {
        padding: 20
    },
    attractionImg: {
        borderRadius: '4px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 300
        } 
    },
    followButton: {
        margin: '20px 0px'
    },
    ratingButton: {
        padding: '3px 0px',
        marginTop: 10
    }
}))

const AttractionDetail = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { attractionId } = useParams();
    const [isFollowing, setIsFollowing] = useState();
    const attraction = useSelector(store => store.attractionsReducer.details);
    const user = useSelector(store => store.userReducer.user);

    const checkIfFollowing = () => {
        return user.artists.map(a => a.id).includes(attractionId);
    };

    const generateRating = () => {
        return (Math.random() * 5).toFixed(2)
    };

    useEffect(() => {
        dispatch(getAttractionDetails(attractionId));
        dispatch(searchEvents({attractionId}));
        if (user.loggedIn) setIsFollowing(checkIfFollowing());
    }, []);

    const handleFollow = () => {
        if (user.loggedIn) {
            dispatch(addArtist({
                id: attractionId,
                name: attraction.name,
                photoUrl: attraction.images[2].url,
                username: user.username
            }));
            setIsFollowing(true);
        } else {
            history.push('/login')
        }            
    };

    const handleUnfollow = () => {
        dispatch(removeArtist({
            id: attractionId,
            username: user.username
        }));
        setIsFollowing(false);
    };

    const renderFollowButton = () => (
        isFollowing ? 
            <Button 
                onClick={handleUnfollow} 
                variant='outlined' 
                color='secondary' 
                size='large' 
                className={classes.followButton}>
                    Unfollow Artist
            </Button> :
            <Button 
                onClick={handleFollow} 
                variant='outlined' 
                color='primary' 
                size='large' 
                className={classes.followButton}>
                    Follow Artist
            </Button> 
    );
    
    return (
        <div>
            {attraction.name ? 
            <>
            <Grid container direction='column' alignItems='center' className={classes.root}>
                <Grid item container sm={9} md={10} lg={7} direction='column'>
                    <Grid item xs={12}>
                        <Paper className={classes.attractionDetailRoot}>
                            <Grid container direction='row' justify='space-between'>
                                <Grid item>
                                    <Grid item>
                                        <Typography variant='h4'>
                                            {attraction.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        {attraction.classifications ? 
                                            <Typography>
                                                {attraction.classifications[0].segment.name} / {attraction.classifications[0].genre.name}
                                            </Typography> :
                                            null
                                        }
                                    </Grid>
                                    <Grid item container>
                                        <Button className={classes.ratingButton} variant='outlined'>
                                            <StarRateIcon fontSize='small'/>
                                            <Typography variant='body2'>{generateRating()}</Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        {renderFollowButton()}
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    {attraction.images ?
                                        <img className={classes.attractionImg} src={attraction.images[2].url}/> :
                                        null
                                    }
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <SearchResults attractionId={attraction.id} attractionName={attraction.name} />
            </> :
            null
            }   
        </div>
    );
    
};

export default AttractionDetail;