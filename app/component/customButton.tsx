import React from 'react';
import { Button } from '@mui/material';

const CustomButton: React.FC = () => {
  return (
    <Button
      type="submit"
      variant="outlined"
      sx={{
        marginTop: '20px',
        width: '100%',
        borderColor: 'var(--color-1)', // Color del borde usando la variable
        color: 'var(--color-1)', // Color del texto usando la variable
        backgroundColor: 'transparent', // Fondo transparente
        '&:hover': {
          backgroundColor: 'var(--color-2)', // Color en hover usando la variable
          color: '#fff', // Color del texto en hover
        },
        '&:active': {
          backgroundColor: 'var(--color-1)', // Color en clic usando la variable
          color: '#fff', // Color del texto en clic
        },
        transition: 'background-color 0.3s ease, color 0.3s ease', // Transición suave
      }}
    >
      Enviar Confirmación
    </Button>
  );
};

export default CustomButton;
