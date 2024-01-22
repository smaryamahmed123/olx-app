import React from 'react';
import Link from '@mui/material/Link';

const MyLink = () => {
  return (
    <Link
      href="#"
      underline="none"  // Set to "always" for underlined by default
      color= '#002f34'
      fontWeight="bolder"
      borderBottom="2px solid"
      sx={{ '&:hover': { borderBottom: 'none', color: '#002f34' }
      
     }}  // Override underline on hover
    >
      {'Login'}
    </Link>
  );
};

export default MyLink;
