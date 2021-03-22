/**User search form
 * - search registered users by username
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputBase, IconButton, makeStyles, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { searchUsers } from '../actions/actionCreators';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        textAlign: 'center'
    }
}));

const UserSearchForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState('');
    const [error, setError] = useState(false)

    const handleChange = evt => {
        setFormData(evt.target.value)
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (formData.length > 0) {
            dispatch(searchUsers(formData));
            setError(false) 
        } else {
            setError(true)
        }
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <InputBase
                className={classes.input}
                name='username'
                value={formData}
                onChange={handleChange}
                placeholder="Search by username"
                inputProps={{ 'aria-label': 'search by username' }}
                endAdornment={
                    <IconButton onClick={handleSubmit} className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                }
            />
            {error && 
                <Typography color='secondary' variant='body2'>Username cannot be blank</Typography> 
            }
        </form>    
    );
};

export default UserSearchForm;