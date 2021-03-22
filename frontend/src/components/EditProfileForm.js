/**Edit profile form
 * - edit first name, last name, email, image
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField, makeStyles, Typography } from '@material-ui/core';
import { updateUser } from '../actions/actionCreators';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 10px'
    },
    form: {
        width: '100%',
        marginTop: 50,
        backgroundColor: theme.palette.common.white,
        padding: 30,
        borderRadius: theme.shape.borderRadius
    },
    title: {
        margin: '25px 0px'
    }
}));

const EditProfileForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.userReducer.user);

    const INITIAL_STATE = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        photoUrl: user.photoUrl
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    };

    const handleClick = evt => {
        evt.preventDefault();
        try {
            dispatch(updateUser(user.username, formData));
            history.push('/profile')
        } catch(e) {
            console.log(e)
            return e
        };
    };

    return (
        <Grid container justify='center' direction='row' className={classes.root}>
            <Grid item container sm={8} md={4}>
                <form className={classes.form}>
                    <Typography className={classes.title} variant='h6'>Edit Profile</Typography>
                    <Grid container direction='column' spacing={3}>
                        <Grid item>
                            <TextField
                                id='firstName'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}
                                variant='outlined'
                                label='First Name'
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='lastName'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                                variant='outlined'
                                label='Last Name'
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                variant='outlined'
                                label='Email'
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='photoUrl'
                                name='photoUrl'
                                value={formData.photoUrl}
                                onChange={handleChange}
                                variant='outlined'
                                label='Photo URL'
                                fullWidth
                            />
                        </Grid>
                        <Grid item container direction='row' justify='space-between'>
                            <Button onClick={handleClick} color='primary'>Update Profile</Button>
                            <Button component={ Link } to='/profile' color='secondary'>Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default EditProfileForm;