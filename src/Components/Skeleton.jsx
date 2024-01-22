import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';



function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap='wrap' justifyContent="space-around" mt="25px">
      {(loading ? Array.from(new Array(9)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 280, marginRight: 0.5, my: 5 }}>
          {item ? (
            <img
              style={{ width: 280, height: 150 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={280} height={150} />
          )}

            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="80%" height='48px' />
              <Skeleton height='48px' />
            </Box>
          
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Loader() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      {/* <Media /> */}
    </Box>
  );
}