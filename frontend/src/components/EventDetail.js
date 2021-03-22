/**Event details
 * - same data as event card plus 'info' if available, share button
 */

import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
        Grid, 
        Paper, 
        makeStyles, 
        Typography, 
        Button, 
        IconButton, 
        Divider, 
        Dialog, DialogTitle, DialogActions, 
        List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, 
        Avatar, 
        Checkbox, 
        Link
       } 
       from '@material-ui/core';
import { getEventDetail } from '../actions/actionCreators';
import dayjs from 'dayjs';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 10px',
        marginBottom: 30
    },
    eventDetailRoot: {
        padding: 20
    },
    attractionImg: {
        borderRadius: '4px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 300
        }, 
        margin: '20px 0px',
        [theme.breakpoints.up('md')]: {
            margin: 0
        }
    },
    imgContainer: {
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-end'
        }
    },
    buttonArea: {
        marginTop: 20
    },
    shareIconButton: {
        marginLeft: 20
    },
    divider:{
        margin: '15px 0px'
    },
    timeAndDate: {
        color: theme.palette.info.dark
    },
    infoArea: {
        marginTop: 20
    },
    backButton: {
        marginBottom: 10
    },
    dialog: {
        width: 300
    }
}))

const EventDetail = () => {
    const classes = useStyles();
    const { eventId } = useParams();
    const history = useHistory();
    const event = useSelector(store => store.searchReducer.eventDetail);
    const friends = useSelector(store => store.userReducer.user.friends);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    useEffect(() => {
        dispatch(getEventDetail(eventId))
    }, []);

    const handleGoBack = () => {
        history.goBack();
    };

    const handleShareClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [checked, setChecked] = useState([0]);

    const handleToggle = username => {
        const currentIndex = checked.indexOf(username);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(username);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleShare = () => {
        setOpen(false);
    };

    return (
        <>
        { event.name ?
            <Grid container direction='column' alignItems='center' className={classes.root}>
                <Grid item container sm={9} md={10} lg={7} direction='column'>
                    <Grid item>
                        <Button onClick={handleGoBack} className={classes.backButton} startIcon={<ArrowBackIcon/>}>
                            Back to Events List
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.eventDetailRoot}>
                            <Grid container direction='column'>
                                <Grid item container direction='row' alignItems='flex-start' justify='space-between'>
                                    <Grid item container direction='column' md={6}>
                                        <Grid item md={10}>
                                            <Typography variant='h4'>
                                                {event.name}
                                            </Typography>
                                        </Grid>
                                        {event.classifications ? 
                                            <Grid item>
                                                <Typography variant='body2'>
                                                    {event.classifications[0].segment.name} / {event.classifications[0].genre.name}
                                                </Typography> 
                                            </Grid>:
                                            null
                                        }
                                        <Divider className={classes.divider}/>
                                        <Grid item>
                                            <Typography className={classes.timeAndDate}variant='h6'>
                                                {dayjs(`${event.dates.start.localDate}`).format('ddd MMM D')}
                                            </Typography>
                                            <Typography className={classes.timeAndDate}variant='h6'>
                                                {dayjs(`${event.dates.start.localDate} ${event.dates.start.localTime}`).format('h:mm a')}
                                            </Typography>
                                        </Grid>
                                        <Divider className={classes.divider}/>
                                        {event._embedded ?
                                            <>
                                            <Grid item>
                                                <Typography>
                                                    {event._embedded.venues[0].name}  
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                {`${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state ?
                                                    event._embedded.venues[0].state.stateCode : 
                                                    event._embedded.venues[0].country.countryCode}`}
                                            </Grid>
                                            </> :
                                            null
                                        }
                                        <Grid item container direction='row' alignItems='center' className={classes.buttonArea}>
                                            <Grid item>
                                                <Button component={ Link } href={event.url} target='_blank' color='primary' variant='outlined'>
                                                    Get Tickets
                                                </Button>
                                            </Grid>
                                            <Grid item>
                                                <IconButton onClick={handleShareClick} className={classes.shareIconButton}>
                                                    <ShareIcon color='primary'/>
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.imgContainer} item container direction='row' md={6}>
                                        {event.images ?
                                        <Grid item>
                                            <img className={classes.attractionImg} src={event.images[2].url}/> 
                                        </Grid> :
                                            null
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.infoArea}>
                                    {event.info ?
                                        <Typography><b>Info:</b> {event.info}</Typography> :
                                        null
                                    }
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        Share Event
                    </DialogTitle>
                    <List className={classes.dialog}>
                        {friends.length ? 
                            friends.map(f => (
                                <ListItem key={f.username} onClick={() => handleToggle(f.username)}>
                                    <ListItemAvatar>
                                        <Avatar src={f.photoUrl}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={f.username}/>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(f.username) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                </ListItem>
                            )) :
                            <ListItem>
                                <ListItemText primary="You haven't added any friends yet!" />
                            </ListItem>
                        }
                    </List>
                    <DialogActions>
                        <Button onClick={handleShare} color='primary'>
                            Share
                        </Button>
                        <Button onClick={handleClose} color='secondary'>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid> :
            null
        }
        </>
    );
};

export default EventDetail;