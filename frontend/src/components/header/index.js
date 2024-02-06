import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuth } from '../../provider/auth';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Helmet } from 'react-helmet';
import PaymentIcon from '@mui/icons-material/Payment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const auth = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <Helmet>
                <title>{auth.user?.name}</title>
            </Helmet>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={handleDrawerClose}
                            sx={{ width: 240 }}
                        >
                            <div>
                                {/* Your logo or additional header content here */}
                                <AppBar position="static" sx={{ marginBottom: 2 }} onClick={()=>{navigate('/dashboard')}}>
                                    <Toolbar>
                                        <Typography variant="h6" noWrap component="div">
                                            {auth.user?.name}
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </div>
                            <List>
                                {/* Add your menu items here */}
                                <ListItem button onClick={()=>{navigate('/finance')}}>
                                    <ListItemIcon><PaymentIcon /></ListItemIcon>
                                    <ListItemText primary="Expense management" />
                                </ListItem>
                                <ListItem button onClick={()=>{navigate('/note')}}>
                                    <ListItemIcon><EventNoteIcon /></ListItemIcon>
                                    <ListItemText primary="Note" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><ListAltIcon /></ListItemIcon>
                                    <ListItemText primary="Task management" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                                    <ListItemText primary="Account Bank" />
                                </ListItem>
                                {/* Add more items as needed */}
                            </List>
                        </Drawer>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            
                        </Typography>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={()=>{navigate('/profile')}}>Profile</MenuItem>
                                <MenuItem onClick={()=>{auth.logOut()}}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}