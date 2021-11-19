import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Genius</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        {user?.email ?
                            <div className="flex">
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                                <Nav.Link as={HashLink} to="/addService">Add a Service</Nav.Link>
                                <Button onClick={logOut} variant="light">Logout</Button>
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>
                            </div>

                            :
                            <div className="flex">
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;