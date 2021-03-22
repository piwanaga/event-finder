/**Find friends by searching by username
 * - renders UserSearchForm and UserSearchResults
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, Grid, Paper, Typography, Button } from '@material-ui/core';
import { clearSearchUsers } from '../actions/actionCreators';
import UserSearchForm from './UserSearchForm';
import UserSearchResults from './UserSearchResults';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 10px'
    },
    searchArea: {
        width: '100%'
    },
    heading: {
        margin: '20px 0px',
    }
}));

const FindFriends = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(store => store.searchReducer.users);

    useEffect(() => {
        dispatch(clearSearchUsers());
    }, []);

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <Grid container direction='column' alignItems='center' className={classes.root}>
            <Grid item container direction='column' alignItems='center' sm={9} md={10} lg={7}>
                <Grid item container direction='row'>
                    <Button onClick={handleGoBack} className={classes.backButton} startIcon={<ArrowBackIcon/>}>
                        Back to Profile
                    </Button>
                </Grid>
                <Paper className={classes.searchArea}>
                    <Grid container direction='column'>
                        <Grid item >
                            <Typography align='center' variant='h5' className={classes.heading}>Find Friends</Typography>
                        </Grid>
                        <Grid item>
                            <UserSearchForm />
                        </Grid>
                        {users.length > 0 ?
                            <Grid item>
                                <UserSearchResults users={users}/>
                            </Grid> :
                            null
                        }
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FindFriends;