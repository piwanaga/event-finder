/**Footer */

import React from 'react';
import { Paper, Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 50,
        marginTop: 200,
        backgroundColor: theme.palette.grey[600]
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        },
        color: theme.palette.common.white
    },
    copyright: {
        color: theme.palette.common.white,
        marginTop: 75
    }
}))

const Footer = () => {
const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Grid container direction='column'>
                <Grid item container direction='row' justify='space-evenly'>
                    <Typography className={classes.link} component={ Link } to='#'>About</Typography>
                    <Typography className={classes.link} component={ Link } to='#'>Contact</Typography>
                    <Typography className={classes.link} component={ Link } to='#'>Careers</Typography>
                    <Typography className={classes.link} component={ Link } to='#'>Hire Me</Typography>
                    <Typography className={classes.link} component={ Link } to='#'>About This API</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.copyright} align='center' variant='body2'>&#169; 2020 Let's Do It App</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Footer;