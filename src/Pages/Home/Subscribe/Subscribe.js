import { Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const Subscribe = () => {

    const subscribeUser = () => {

    }
    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h2 style={{ marginBottom: '30px' }}>Subscribe our Newsletter to Get Regular updates on tourist spots</h2>
            <Grid item xs={8} md={6} sx={{ display: 'flex', margin: 'auto' }}>

                <TextField style={{ backgroundColor: 'white' }}
                    sx={{ width: '100%' }}
                    name="buyerName"
                    id="filled-basic"
                    label="Your Name"
                    variant="filled" />
                <br />
                <Button onClick={subscribeUser} variant="contained" style={{ backgroundColor: 'tomato' }}>
                    Subscribe Newsletter
                </Button>
            </Grid>
        </div>
    );
};

export default Subscribe;