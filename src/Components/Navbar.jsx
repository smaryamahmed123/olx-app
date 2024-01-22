import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import olxlogo from '../assets/olxLogo.png';
import { Link } from '@mui/material';
import Image from './Img';
import Button from '@mui/material/Button';
import MyLink from './Button';
import SearchInput from './SearchBar';
import Grid from '@mui/material/Grid';
import ImgLogo2 from '../assets/olxLogo2.webp'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#f7f8f8', marginBottom: '20px'}}>
        <Toolbar sx={{display: 'block'}}>
         <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
           <img src={olxlogo} alt="logo" style={{width: '40px', height: '30px', marginRight: 16}} />
           <Link href="/" style={{color: 'black', textDecorationColor: 'black'}}><DirectionsCarIcon />MOTER</Link>
           <Link href="/" style={{color: 'black', textDecorationColor: 'black'}}><ApartmentIcon />PROPERTY</Link>
         </Grid>
          <Grid item sx={{display: 'flex', alignItems: 'center' }}>
            <img src={ImgLogo2} alt="logo" style={{width: '70px', height: '80px', marginRight: 16}}  />
             <SearchInput></SearchInput>
          <MyLink />
          <Button style={{border: 'none' , backgroundColor: 'whitesmoke', borderRadius: 5}}><Image></Image></Button>
          </Grid>

         
         
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

