/**User search results
 * - displays users matching username search from UserSearchForm
 * - can friend/unfriend users
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
        makeStyles, 
        Grid, 
        Paper, 
        List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, 
        Avatar, 
        Button, 
        Dialog, DialogContent, DialogContentText, DialogActions 
       } from '@material-ui/core';
import { addFriend, removeFriend } from '../actions/actionCreators';

const useStyles = makeStyles(() => ({
    
}))

const UserSearchResults = ({ users }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(store => store.userReducer.user);
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [action, setAction] = useState(null)

    const checkIfFriends = username => {
        return user.friends.map(f => f.username).includes(username)
    };

    const renderFriendButton = username => {
        if (username === user.username) {
            return null
        } else if (checkIfFriends(username)) {
            return (
                <Button 
                    onClick={() => handleOpen(username, 'remove')} 
                    variant='outlined' 
                    color='secondary' 
                    size='small' 
                    className={classes.followButton}>
                        Unfriend
                </Button>
            )
        } else {
            return (
                <Button 
                    onClick={() => handleOpen(username)} 
                    variant='outlined' 
                    color='primary' 
                    size='small' 
                    className={classes.followButton}>
                        Add to Friends
                </Button> 
            )
        }
    };

    const handleOpen = (username, action=null) => {
        setActiveId(username);
        setAction(action)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleAddFriend = () => {
        dispatch(addFriend({
            username1: user.username,
            username2: activeId
        }));
        setOpen(false)
    };

    const handleUnfriend = () => {
        dispatch(removeFriend({
            username1: user.username,
            username2: activeId
        }));
        setOpen(false)
    };

    return (
        <>
            <Grid container direction='column' alignItems='center' className={classes.root}>
                <Grid item container direction='column' sm={8} md={6}>
                    <Grid item>
                        <Paper>
                            <List className={classes.list}>
                                {users.map(u => (
                                <ListItem key={u.username} divider>
                                    <ListItemAvatar>
                                        <Avatar src={u.photoUrl}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={u.username}/>
                                    <ListItemSecondaryAction>
                                        {renderFriendButton(u.username)}
                                    </ListItemSecondaryAction>
                                </ListItem>
                                ))}
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
                        {action ?
                            'Are you sure you want to remove this user from friends?' :
                            'Are you sure you want to add this user to friends?'
                        }   
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {action ?
                        <>
                        <Button onClick={handleUnfriend} color='primary'>Yes, remove</Button>
                        <Button onClick={handleClose} color='secondary'>Cancel</Button>
                        </> :
                        <>
                        <Button onClick={handleAddFriend} color='primary'>Yes, add</Button>
                        <Button onClick={handleClose} color='secondary'>Cancel</Button>
                        </>
                    }
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UserSearchResults