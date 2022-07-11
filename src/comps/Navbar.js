import { 
  Box, 
  Button, 
  Stack, 
  Typography, 
  Paper, 
  IconButton, 
  Drawer,
  List,
  ListItemText,
  ListItem,
  ListItemButton, 
} from '@mui/material'
import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(true);
  const [drawerState, setDrawerState] = useState(false);
  const handleDrawer = (state) => () => {
    setDrawerState(state);
  };

  const drawer = (anchor) => (
    <>
      <Box
        sx={{ width: 250, bgcolor: 'black', height: '100%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        role="presentation"
        onClick={handleDrawer(anchor, false)}
        onKeyDown={handleDrawer(anchor, false)}
      >
        <List sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={'About'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={'Product'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={'Contact'} />
            </ListItemButton>
          </ListItem>
          <Paper elevation={5} onClick={() => { }} sx={{
            marginTop: 2,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#6714E5', padding: '0.5rem 1rem', borderRadius: '10px', cursor: 'pointer', "&:hover": {
            opacity: 1,
            backgroundColor: "#5a2cbb",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
          },
          "&:active": {
            boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
          },
        }}>
          <Typography>Login/Register</Typography>
          <Typography variant='caption'>(Coming Soon)</Typography>
        </Paper>
        </List>
      </Box>
    </>
  );

  return (
    <Stack sx={{ justifyContent: 'space-between', padding: '1rem 1.5rem' }} direction={'row'}>
      <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: '200px' }} src={logo}></img>
      </Stack>

      <Stack direction={'row'} sx={{ display: { md: 'flex', lg: 'flex', xl: 'flex', xs: 'none' } }}>
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <li><a href="#about">About</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <Paper elevation={5} onClick={() => { }} sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#6714E5', padding: '0.5rem 1rem', borderRadius: '10px', cursor: 'pointer', "&:hover": {
            opacity: 1,
            backgroundColor: "#5a2cbb",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
          },
          "&:active": {
            boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
          },
        }}>
          <Typography>Login/Register</Typography>
          <Typography variant='caption'>(Coming Soon)</Typography>
        </Paper>

      </Stack>
      <Box sx={{ display: { md: 'none', lg: 'none', xl: 'none' } }}>
            <IconButton onClick={handleDrawer(true)}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
      </Box>

      <Drawer anchor={'right'} open={drawerState} onClose={handleDrawer(false)}>
        {drawer('right')}
      </Drawer>
    </Stack>
  )
}

export default Navbar