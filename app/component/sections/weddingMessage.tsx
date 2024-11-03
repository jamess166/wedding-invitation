import { Typography, Box } from '@mui/material';

const WeddingMessage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: '800px', // Limitar el ancho máximo para que no se expanda demasiado
        margin: '0 auto', // Centrado
        padding: '60px',
        backgroundColor: 'var(--background)', // Fondo suave
      }}
    >
      {/* Título con la fuente 'Allura' */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'var(--font-allura)',
          fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, // Tamaños responsivos
          color: 'var(--foreground)',
          marginBottom: '40px',
        }}
      >
        Nos Casamos
      </Typography>

      {/* Subtítulo con una fuente diferente */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'var(--font-roboto)', // Fuente diferente
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Tamaños responsivos
          color: 'var(--color-1)',
          lineHeight: '1.6',
        }}
      >
        Nos encantaría que seas parte de este momento tan especial para nosotros.
        <br />
        ¡Falta poco para el gran día y queremos celebrarlo contigo!
      </Typography>
    </Box>
  );
};

export default WeddingMessage;