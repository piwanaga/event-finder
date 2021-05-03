/**Login form */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, TextField, Button, makeStyles, Typography } from '@material-ui/core';
import { loginUser } from '../actions/actionCreators';
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
    },
    registerLink: {
        color: theme.palette.grey[600]
    }
}));

const LoginForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const INITIAL_STATE = {
        username: '',
        password: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErr, setFormErr] = useState(false);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        for (let key of Object.keys(formData)) {
            if (formData[key] === '') {
                return setFormErr(true)
            };
        };
        try {
            dispatch(loginUser(formData));
            history.push('/');
        } catch(e) {
            console.log(e)
            return e
        };
    };

    return (
        <Grid container justify='center' direction='row' className={classes.root}>
            <Grid item container sm={8} md={4}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Typography className={classes.title} variant='h6'>Login to your account</Typography>
                    {formErr ? 
                        <Typography color='secondary' variant='subtitle1'>Cannot leave any fields blank</Typography> :
                        null
                    }
                    <Grid container direction='column' spacing={3}>
                        <Grid item>
                            <TextField
                                id='username'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                variant='outlined'
                                label='Username'
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='password'
                                name='password'
                                type='password'
                                value={formData.password}
                                onChange={handleChange}
                                variant='outlined'
                                label='Password'
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button type='submit' color='primary'>Login</Button>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.registerLink} variant='body2' component={ Link } to='/register'>Don't have an account? Sign up here</Typography>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default LoginForm;