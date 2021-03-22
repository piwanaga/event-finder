/**Card displayed on homepage that shows attraction name, image and event count
 * - rendered by AttractionCardList
 */

import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
        marginBottom: 20,
        [theme.breakpoints.up('sm')]: {
            width: 250
        } 
    },
    artistName: {
        fontWeight: 'bold'
    }
}));

const AttractionCard = ({ name, img, id, eventCount }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea component={ Link } to={`/attraction/${id}`}>
                <CardMedia 
                    component='img'
                    alt={name}
                    height='140'
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Grid container direction='row' justify='space-between'>
                        <Grid item xs={8}>
                            <Typography className={classes.artistName}>{name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='body2'>{eventCount} events</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AttractionCard;