import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const DressCodeCard: React.FC = () => {
  // Colores sugeridos para el dress code
  const dressCodeColors = ['#2e3404', '#617751', '#bba993', '#d6d6cc'];

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: { xs: 4, sm: '20px auto' }, // Margen en pantallas pequeñas
        padding: '20px',
        backgroundColor: 'var(--color-4)', // Fondo de color
        borderRadius: '16px', // Bordes redondeados
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Sombra sutil
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          align="center"
          marginBottom={6}
          sx={{
            color: 'var(--color-1)', // Color gris para el texto
            fontSize: '28px', // Tamaño de fuente más grande
            fontWeight: 'bold', // Negrita
          }}
        >
          Dress Code
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, // Dos en dos en pantallas pequeñas, cuatro en grandes
            gap: 2,
            marginTop: 2,
            justifyItems: 'center',
          }}
        >
          {dressCodeColors.map((color, index) => (
            <Box
              key={index}
              sx={{
                width: '100px', // Tamaño del círculo
                height: '100px',
                borderRadius: '50%',
                backgroundColor: color,
                border: '0px', // Borde blanco para mejor contraste
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Sombra para los círculos
                transition: 'transform 0.3s ease', // Animación suave al hacer hover
                '&:hover': {
                  transform: 'scale(1.1)', // Efecto de hover
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DressCodeCard;
