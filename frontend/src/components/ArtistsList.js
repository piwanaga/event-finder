/**List of artists that user is following */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
         List, ListItem, ListItemAvatar, ListItemText,ListItemSecondaryAction, 
         Avatar, 
         Button, 
         Grid, 
         makeStyles, 
         Paper, 
         Typography, 
         Dialog, DialogContent, DialogContentText, DialogActions 
       } 
       from '@material-ui/core';
import { removeArtist } from '../actions/actionCreators';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 10px'
    },
    list: {
        width: '100%'
    },
    paper: {
        paddingTop: 10
    },
    heading: {
        margin: '20px 0px 5px 0px'
    },
    textContainer: {
        maxWidth: '100vw'
    }
}))

const ArtistsList = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const user = useSelector(store => store.userReducer.user);
    const artists = useSelector(store => store.userReducer.user.artists);

    const handleOpen = id => {
        setActiveId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleUnfollow = () => {
        dispatch(removeArtist({
            id: activeId,
            username: user.username
        }));
        setOpen(false);
    };

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <div>
            <Grid container direction='column' alignItems='center' className={classes.root}>
                <Grid item container direction='column' sm={8} md={6}>
                    <Grid item container direction='row'>
                        <Button onClick={handleGoBack} className={classes.backButton} startIcon={<ArrowBackIcon/>}>
                            Back to Profile
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography align='center' variant='h5' className={classes.heading}>My Artists</Typography>
                            <List className={classes.list}>
                                {artists.length ? 
                                    artists.map(a => (
                                    <ListItem key={a.id} divider component={ Link } to={`/attraction/${a.id}`} button>
                                        <ListItemAvatar>
                                            <Avatar src={a.photoUrl}/>
                                        </ListItemAvatar>
                                        <Grid container>
                                            <Grid item xs={8}>
                                            <ListItemText primaryTypographyProps={{noWrap: true}} primary={a.name}/>
                                            </Grid>
                                        </Grid>
                                        <ListItemSecondaryAction>
                                            <Button 
                                                onClick={() => handleOpen(a.id)} 
                                                variant='outlined' 
                                                color='secondary' 
                                                size='small' 
                                                className={classes.followButton}>
                                                    Unfollow
                                            </Button>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    )) :
                                    <ListItem>
                                        <ListItemText primary="You haven't followed any artists yet!" />
                                    </ListItem>
                                }
                            </List>
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
                        Are you sure you want to unfollow this artist?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUnfollow} color='primary'>Yes, Unfollow</Button>
                    <Button onClick={handleClose} color='secondary'>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ArtistsList;