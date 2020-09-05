import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const NoResults = () => (
    <Grid item xs={12}>
        <Paper className="paper">
            <h2>No Results</h2>
        </Paper>
    </Grid>
);

NoResults.displayName = 'NoResults';
export default NoResults;
