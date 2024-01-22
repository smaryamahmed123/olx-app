import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#002f34',

    }
  });

const HeartRating = () => {
  return (
    <Box>
      <StyledRating
        icon={<FavoriteIcon />}
        emptyIcon={<FavoriteIcon/>}
        max={1}             
      />
    </Box>
  );
};


const labels = {
  0.5: '',
  1: '',
  1.5: '',
  2: '',
  2.5: '',
  3: '',
  3.5: '',
  4: '',
  4.5: 'Excellent',
  5: '',
};

function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}


export  {HeartRating, TextRating};
