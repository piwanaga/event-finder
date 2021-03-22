/**User profile
 * - displays:
 *      - basic user info
 *      - friends
 *      - artists following
 * - links to edit profile, view/find friends, view artists following
 */

import React from 'react';
import { 
        Grid, 
        Card, CardContent, CardActions, 
        Typography, 
        makeStyles, 
        Divider, 
        Button, 
        Avatar, 
        List, ListItem, ListItemAvatar, ListItemText 
       } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '0px 10px'
    },
    section: {
        marginBottom: 20
    },
    divider: {
        margin: '20px 0px'
    }
}));

const Profile = () => {
    const classes = useStyles();
    const user = useSelector(store => store.userReducer.user);
    const friends = user.friends;
    const artists = user.artists;
    let friendsList;
    let artistsList;
    
    friends.length < 5 ? friendsList = friends : friendsList = friends.slice(0,5);
    artists.length < 5 ? artistsList = artists : artistsList = artists.slice(0,5);
    
    return (
        <Grid container justify='center'>
        <Grid item container direction='row' justify='center' className={classes.root} spacing={3} sm={12} lg={8}>
            <Grid item container sm={8} direction='column' spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant='h6'>{user.firstName} {user.lastName}</Typography>
                            <Divider variant='fullWidth' className={classes.divider} />
                            <Typography variant='body2'>Username</Typography>
                            <Typography>{user.username}</Typography>
                            <Divider variant='fullWidth' className={classes.divider} />
                            <Typography variant='body2'>Email Address</Typography>
                            <Typography>{user.email}</Typography>
                            <Divider variant='fullWidth' className={classes.divider} />
                        </CardContent>
                        <CardActions>
                            <Button component={ Link } to='/profile/edit' color='primary'>Edit Profile</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Grid container direction='column'>
                                <Grid item>
                                    <Typography variant='h6'>Friends</Typography>
                                </Grid>
                                <Grid item>
                                        <List>
                                        {friendsList.length ? 
                                            friendsList.map(f => (
                                                <ListItem key={f.username}>
                                                    <ListItemAvatar>
                                                        <Avatar src={f.photoUrl}/>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={f.username}/>
                                                </ListItem>
                                            )) :
                                            <ListItem>
                                                <ListItemText primary="You haven't added any friends yet!" />
                                            </ListItem>
                                        }
                                        </List> 
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            {friendsList.length ? 
                                <Button component={ Link } to='/profile/friends' color='primary'>View All</Button> :
                                null
                            }
                            <Button component={ Link } to='/users/search' color='primary'>Find Friends</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Grid container direction='column'>
                                <Grid item>
                                    <Typography variant='h6'>Artists Following</Typography>
                                </Grid>
                                <Grid item>
                                    <List>
                                    {artistsList.length ?
                                        artistsList.map(a => (
                                                <ListItem key={a.id}>
                                                    <ListItemAvatar>
                                                        <Avatar src={a.photoUrl} />
                                                    </ListItemAvatar>
                                                    <ListItemText primary={a.name}/>
                                                </ListItem>
                                        )) :
                                        <ListItem>
                                            <ListItemText primary="You haven't followed any artists yet!" />
                                        </ListItem>
                                    }
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button component={ Link } to='/profile/artists' color='primary'>View All</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    );
};

export default Profile;