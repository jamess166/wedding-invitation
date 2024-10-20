import React from 'react';
import { Box, Typography } from '@mui/material';

interface LabelWithDecorationsProps {
  text: string;
}

const LabelWithDecorations: React.FC<LabelWithDecorationsProps> = ({ text }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-2)', // Color de fondo
        padding: '20px',
        maxWidth: '40%',
        width: 'fit-content',
        margin: '0 auto',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
            
        //   top: '50%',
          height: '100%',
          width: '20px',
          backgroundSize: 'contain', // Ajuste para que no se corte
          backgroundRepeat: 'no-repeat', // Evita la repetición
        //   transform: 'translateY(25%)',
        },
        '&::before': {            
          left: -19,
          backgroundImage: 'url("/images/img_cinta01.svg")',
          backgroundPosition:'left',      
        },
        '&::after': {
          right: -19,
          backgroundImage: 'url("/images/img_cinta02.svg")',
          backgroundPosition:'left',  
        },
      }}
    >
      <Typography
        sx={{
          position: 'relative',
          zIndex: 1,
          fontSize: '24px',
          color: '#fff', // Color del texto
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default LabelWithDecorations;
