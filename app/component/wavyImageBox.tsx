import React from 'react';
import { Box } from '@mui/material';

const WavyImageBox = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "110vh", md: "110vh" },
        backgroundImage: `url('/images/banner.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '200px',
          backgroundImage: `url("/images/img_ondas01.svg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
      }}
    />
  );
};

export default WavyImageBox;