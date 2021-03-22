/**Shows list of uesr's friends
 * - can unfriend a user
 * - includes dialog to confirm unfriend
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { 
        List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, 
        Avatar, 
        Button, 
        Grid, 
        makeStyles, 
        Paper, 
        Dialog, DialogContent, DialogContentText, DialogActions, 
        Typography 
       } from '@material-ui/core';
import { removeFriend } from '../actions/actionCreators';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 10px'
    },
    list: {
        width: '100%'
    },
    heading: {
        margin: '20px 0px 5px 0px'
    }
}));

const FriendsList = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const user = useSelector(store => store.userReducer.user);
    const friends = user.friends;
    
    const handleOpen = username => {
        setActiveId(username);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUnfriend = () => {
        dispatch(removeFriend({
            username1: user.username,
            username2: activeId
        }));
        setOpen(false);
    };

    const handleGoBack = () => {
        history.goBack();
    };


    return (
        <>
        <Grid container direction='column' alignItems='center' className={classes.root}>
            <Grid item container direction='column' sm={8} md={6}>
                <Grid item container direction='row'>
                    <Button onClick={handleGoBack} className={classes.backButton} startIcon={<ArrowBackIcon/>}>
                        Back to Profile
                    </Button>
                </Grid>
                <Grid item>
                    <Paper>
                        <Grid container direction='column'>
                            <Grid item>
                                <Typography align='center' variant='h5' className={classes.heading}>My Friends</Typography>
                            </Grid>
                            <Grid item>
                                <List className={classes.list}>
                                    {friends.length ? 
                                        friends.map(f => (
                                            <ListItem key={f.username} divider>
                                                <ListItemAvatar>
                                                    <Avatar src={f.photoUrl}/>
                                                </ListItemAvatar>
                                                <ListItemText primary={f.username}/>
                                                <ListItemSecondaryAction>
                                                    <Button onClick={() => handleOpen(f.username)} color='secondary'>Unfriend</Button>
                                                </ListItemSecondaryAction>
                                            </ListItem> 
                                        )) :
                                        <ListItem>
                                            <ListItemText primary="You haven't added any friends yet!" />
                                        </ListItem>
                                    }
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText>
                    'Are you sure you want to remove this user from friends?' 
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleUnfriend} color='primary'>Yes, remove</Button>
                <Button onClick={handleClose} color='secondary'>Cancel</Button>
            </DialogActions>
        </Dialog>
        </>
    );
};

export default FriendsList;