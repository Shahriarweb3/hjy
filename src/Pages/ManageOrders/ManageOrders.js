import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { Button, Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [approved, setApproved] = useState();

    useEffect(() => {
        fetch('https://murmuring-bastion-29121.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // Delete an order from ui
    const handleDelete = id => {
        const url = `https://murmuring-bastion-29121.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Order Deleted Successfully')
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                };

            })
    }
    // update an order status
    const updateOrderStatus = () => {
        const approveOrder = { orderStatus: 'Approved' }
        setApproved(approveOrder);
    }

    const handleUpdateStatus = id => {
        updateOrderStatus()
        fetch(`https://murmuring-bastion-29121.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approved)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Order Approved Successfully')

                }

            })
        window.location.reload();


    }


    return (
        <div style={{ marginBottom: '250px' }}>
            <Container style={{ backgroundColor: 'SeaShell', paddingTop: '10px', paddingBottom: '40px' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', my: 4 }}>Your Total Orders: {orders.length}</Typography>
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
                            {orders.map((row) => (
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
                                    <TableCell align="right"><Button onClick={() => handleUpdateStatus(row._id)}>Approve Order</Button><Button onClick={() => handleDelete(row._id)}>Delete Order</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container >

        </div >
    );
};

export default ManageOrders;