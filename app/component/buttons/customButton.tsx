import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ disabled = false }) => {
  return (
    <Button
      type="submit"
      variant="outlined"
      disabled={disabled}      
      sx={{
        marginTop: '20px',
        width: '100%',
        borderColor: disabled ? 'gray' : 'var(--color-1)', // Color del borde usando la variable
        color: disabled ? 'gray' : 'var(--color-1)', // Color del texto usando la variable
        backgroundColor: 'transparent', // Fondo transparente
        '&:hover': {
          backgroundColor: disabled ? 'transparent' : 'var(--color-2)', // Color en hover usando la variable
          color: disabled ? 'gray' : '#fff', // Color del texto en hover
          borderColor: disabled ? 'gray' : 'var(--color-2)',
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
        '&:active': {
          backgroundColor: disabled ? 'transparent' : 'var(--color-1)', // Color en clic usando la variable
          color: disabled ? 'gray' : '#fff', // Color del texto en clic
        },
        '&.Mui-disabled': {
          borderColor: 'rgba(0, 0, 0, 0.12)',
          color: 'rgba(0, 0, 0, 0.26)',
        },
        transition: 'background-color 0.3s ease, color 0.3s ease', // Transición suave
      }}
    >
      Enviar Confirmación
    </Button>
  );
};

export default CustomButton;
