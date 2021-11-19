import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import { Button, Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://murmuring-bastion-29121.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(result => setMyOrder(result));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://murmuring-bastion-29121.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted')
                        const remainingOrders = myOrder.filter(order => order._id !== id);
                        setMyOrder(remainingOrders);
                    };

                })
        }
    }


    return (
        <div style={{ marginBottom: '250px' }}>
            <Container style={{ backgroundColor: 'SeaShell', paddingTop: '10px', paddingBottom: '40px' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', my: 4 }}>Your Total Orders: {myOrder.length}</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300, }} aria-label="orders table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell align="right">Tour Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Order Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {myOrder.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.buyerName}
                                    </TableCell>
                                    <TableCell align="right">{row.tourName}</TableCell>
                                    <TableCell align="right"><p>TK: {row.tourPrice}</p></TableCell>
                                    <TableCell align="right"><Button disabled style={{ color: 'red' }}>{row.orderStatus === 'Approved' ? 'Approved' : 'Pending'}</Button></TableCell>
                                    <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete Order</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container >

        </div >
    );
};

export default MyOrders;