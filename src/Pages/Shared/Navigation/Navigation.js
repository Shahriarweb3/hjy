import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function Navigation() {
    const [state, setState] = React.useState(false);
    const { user, logOut } = useAuth();
    const theme = useTheme();

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            {user.email ? <List>
                <ListItem button>
                    <ListItemText>
                        <Link to="/"> Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><Link to="/myorders">My Orders</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to="/ourpackages">Our Packages</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><Link to="/manageorders">Manage All Orders</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><Link to="/addPackage">Add a Package</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button onClick={logOut}>
                    <ListItemText>Log Out</ListItemText>
                </ListItem>
            </List>
                :
                <List>
                    <ListItemText>
                        <Link to="/"> Home</Link>
                    </ListItemText>
                    <ListItemText>
                        <Link to="/ourpackages">Our Packages</Link>
                    </ListItemText>
                    <ListItemText>
                        <Link to="/login">Login</Link>
                    </ListItemText>
                </List>
            }
            <Divider />
        </Box>
    );

    const useStyle = makeStyles({

        navItem: {
            color: '#fff',
            textDecoration: 'none',
            marginRight: '10px'
        },
        navItemHolder: {
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        iconButtonHide: {
            [theme.breakpoints.up('sm')]: {
                display: 'none!important'
            }
        }
    })
    const { navItem, navItemHolder, iconButtonHide } = useStyle();


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => setState(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={iconButtonHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Travel Mania
                        </Typography>
                        <Box className={navItemHolder}>
                            {user?.email ?
                                <div className="flex">
                                    <Link className={navItem} to="/home">Home</Link>
                                    <Link className={navItem} to="/myorders">My Orders</Link>
                                    <Link className={navItem} to="/ourpackages">Our Packages</Link>
                                    <Link className={navItem} to="/manageorders">Manage All Orders</Link>
                                    <Link className={navItem} to="/addPackage">Add a Package</Link>
                                    <small style={{ color: 'tomato' }}>{user.displayName}</small>
                                    <Button onClick={logOut} variant="light">Logout</Button>
                                </div>

                                :
                                <div className="flex">
                                    <Link className={navItem} to="/ourpackages">Our Packages</Link>
                                    <Link className={navItem} to="/home">Home</Link>
                                    <Link className={navItem} to="/blogs">Blogs</Link>
                                    <Link className={navItem} to="/login">Login</Link>
                                </div>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}
