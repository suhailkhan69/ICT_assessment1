import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h4" align = "left" component="div" sx={{ flexGrow: 1 }}>
            BLOG
          </Typography>
          <Button color="inherit" variant="outlined" className='btn'><Link to ={'/'}>Home</Link></Button>
          <Button color="inherit" variant="outlined" className='btn'><Link to ={'/add'}>Add Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
