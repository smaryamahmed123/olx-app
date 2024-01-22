import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const StyledSearch = styled('div')(({ theme, width, borderColor }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border: `1px solid ${borderColor || theme.palette.primary.main}`,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: width || '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme, }) => ({
    color: '#002f34',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const SearchInput = () => {
  return (
    
   <>
    <StyledSearch width="50%" borderColor="#002f34">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pakistan"
              inputProps={{ 'aria-label': 'search' }}
              color='#002f34'
            />
          </StyledSearch>

         

       <Grid container alignItems="center" style={{display: 'flex'}}>
      <Grid item xs>
        <StyledSearch width="0%" borderColor="#002f34">
          <SearchIconWrapper></SearchIconWrapper>
          <StyledInputBase
            placeholder="Find Cars, Mobile Phones and more…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </StyledSearch>
      </Grid>
      <Grid item>
        <IconButton>
          <SearchIcon sx={{ backgroundColor: '#002f34', color: 'white', p: 1 }} />
        </IconButton>
      </Grid>
    </Grid>
    
   </>
  );
};

export default SearchInput;


// export default SearchInput;
