import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 6 }}>
            Live Matches
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Upcoming
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Completed
          </Typography>
            <Button color="inherit" >Login</Button> */}
            <Typography variant='h5'>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
                Live Score
            </Typography>
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;