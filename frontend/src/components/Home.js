/**Homepage
 * - renders AttractionCardList
 */

import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux'; 
import AttractionCardList from './AttractionCardList';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '0px 10px'
    }
}));

const Home = () => {
    const classes = useStyles();
    const attractions = useSelector(store => store.attractionsReducer.attractionsHome);

    return (
        <div className={classes.root}>
            <Grid container direction='column' spacing={3} alignItems='center'>
                {Object.keys(attractions).map(a => (
                    <Grid key={a} item sm={9} md={12} lg={8}>
                        <AttractionCardList title={attractions[a].title} attractions={attractions[a].attractions} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default Home;