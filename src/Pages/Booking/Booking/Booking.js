import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const Booking = () => {
    const history = useHistory();
    const { serviceId } = useParams();
    const [tourPlan, setTourPlan] = useState({});
    const tourName = tourPlan.name;
    const tourPrice = tourPlan.price;
    const { user } = useAuth();
    const initialBookingInfo = { buyerName: user.displayName, buyerEmail: user.email, address: '', city: '', phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    useEffect(() => {
        fetch(`https://murmuring-bastion-29121.herokuapp.com/booking/${serviceId}`)
            .then(res => res.json())
            .then(result => setTourPlan(result));
    }, [])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }


    const onSubmit = e => {

        const orderConfirm = {
            ...bookingInfo,
            tourName,
            tourPrice
        }
        fetch('https://murmuring-bastion-29121.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderConfirm)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Order processed Successfully');
                    history.replace('/myorders')
                }
            })

        e.preventDefault();
        e.target.reset();


    };
    // 

    return (
        <Container maxWidth="lg" >
            <Grid sx={{ mt: 6, mb: 6, alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
                <Grid item xs={6} md={7}>
                    <Paper sx={{ display: 'flex', flexDirection: 'column' }} elevation={8}>
                        <Box sx={{ p: 4 }}>
                            <img style={{ width: '100%' }} src={tourPlan.img} alt="" />
                        </Box>
                        <Box sx={{ px: 4, pb: 4 }}>
                            <h5>{tourPlan.name}</h5>
                            <h5>Price: {tourPlan.price}</h5>
                            <p className="px-3">{tourPlan.description}</p>
                        </Box>

                    </Paper>

                </Grid>
                <Grid item xs={6} md={5} >
                    <Paper elevation={8} sx={{ width: '90%', backgroundColor: 'SeaShell' }}>
                        <form onSubmit={onSubmit} style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                            <TextField style={{ backgroundColor: 'white' }}
                                sx={{ width: '75%', mb: 2 }}
                                name="buyerName"
                                defaultValue={user.displayName}
                                id="filled-basic"
                                label="Your Name"
                                onBlur={handleOnBlur}
                                variant="filled" />
                            <br />
                            <TextField
                                style={{ backgroundColor: 'white' }}
                                sx={{ width: '75%', mb: 2 }}
                                name="buyerEmail"
                                defaultValue={user.email}
                                id="filled-basic"
                                label="Your Email"
                                onBlur={handleOnBlur}
                                variant="filled" />
                            <br />
                            <TextField
                                style={{ backgroundColor: 'white' }}
                                sx={{ width: '75%', mb: 2 }}
                                name="address"
                                onBlur={handleOnBlur}
                                id="filled-basic"
                                label="Address"
                                variant="filled" />
                            <br />
                            <TextField
                                style={{ backgroundColor: 'white' }}
                                sx={{ width: '75%', mb: 2 }}
                                name="city"
                                onBlur={handleOnBlur}
                                id="filled-basic"
                                label="City"
                                variant="filled" />
                            <br />
                            <TextField
                                style={{ backgroundColor: 'white' }}
                                sx={{ width: '75%', mb: 2 }}
                                name="phone"
                                onBlur={handleOnBlur}
                                id="filled-basic"
                                label="Phone"
                                variant="filled" />
                            <br />
                            <Button type="submit" variant="contained" style={{ backgroundColor: 'tomato' }}>
                                Place Order
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Grid>

            </Grid>
        </Container>
    );
};

export default Booking;