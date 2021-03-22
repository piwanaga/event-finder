/**Header 
 * - nav links
 * - renders search bar
*/

import React from 'react';
import { AppBar, Button, Toolbar, makeStyles, Grid, Typography, Avatar } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/actionCreators';
import Search from './Search';

const useStyles = makeStyles(theme => ({
    appbar: {
        marginBottom: 30,
        padding: 20,
        backgroundColor: theme.palette.grey[300]
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'inline-block',
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    }
}));

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.userReducer.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/')
    };

    const renderUserLinks = () => {
        if (user.loggedIn) {
            return (
                <Grid container direction='row'>
                    <Avatar src={user.photoUrl} />
                    <Button component={ Link } to='/profile'>My Profile</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </Grid>
            );
        } else {
            return(
                <>
                <Button component={ Link } to='/register'>Register</Button>
                <Button component={ Link } to='/login' >Login</Button>
                </>
            );
        };
    };
    
    return (
        <AppBar position='static' color='inherit' className={classes.appbar}>
            <Toolbar>
                <Grid container direction='row' justify='space-between'>
                    <Grid item>
                        <Button component={ Link } to='/'>
                            <Typography variant='h6'>EventFinder</Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Search />
                    </Grid>
                    <Grid item>
                        {renderUserLinks()}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;