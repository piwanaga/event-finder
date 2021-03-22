/**Card that displays basic event info
 * - name
 * - venue
 * - date/time
 * - 'get tickets' button
 */

import React from 'react';
import { Card, CardContent, CardActionArea, Typography, CardMedia, Grid, makeStyles, Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import dayjs from 'dayjs';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '100vw',
        borderRadius: 0,
        padding: 8
    },
    img: {
        width: 150,
        display: 'none',
        borderRadius: '4%',
        [theme.breakpoints.up('sm')]: {
            display: 'inline',
        }
    },
    textArea: {
        margin: 2
    },
    actionArea: {
        flexGrow: 3
    },
    button: {
        margin: '0px 20px 20px 20px'
    },
    timeAndDate: {
        color: theme.palette.info.dark,
        fontWeight: 'bold'
    },
    artistName: {
        fontWeight: 'bold'
    }
}));

const EventCard = ({ name, id, img, date, time, venue, ticketUrl}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container direction='row' alignItems='center'>
                <Grid item xs={12} md={9}>
                    <CardActionArea component={ RouterLink } to={`/events/${id}`}>
                        <Grid container direction='row' alignItems='center'>
                            <Grid item sm={4} md={3}>
                                <CardMedia
                                    className={classes.img}
                                    component='img'
                                    image={img}
                                    height='100'
                                />
                            </Grid>
                            <Grid item xs={12} sm={8} md={9} >
                                <CardContent>
                                    <Typography className={classes.artistName}>{name}</Typography>
                                    <Typography noWrap variant='body2'>{venue}</Typography>
                                    <Typography className={classes.timeAndDate} variant='body2'>{dayjs(date).format('MMM D')}</Typography>
                                    <Typography className={classes.timeAndDate} variant='body2'>{dayjs(`${date} ${time}`).format('ddd h:mm a')}</Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Grid>
                <Grid item container justify='center' md={3}>
                    <Grid item>
                        <Button 
                            component={ Link } 
                            href={ticketUrl} 
                            target='_blank' 
                            variant='outlined' 
                            color='primary' 
                            className={classes.button}
                        >
                            Get Tickets
                        </Button>  
                        
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default EventCard;