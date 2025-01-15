import { Typography, Box } from '@mui/material';
import CoupleNames from './coupleNames';
import { useSearchParams } from 'next/navigation';

const WeddingMessage: React.FC = () => {

  const searchParams = useSearchParams(); // Obtener los parámetros de la URL
  const nameFromUrl = searchParams.get('name') || '';
  const guestsFromUrl = parseInt(searchParams.get('guests') || '1', 10);

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
        px: 8,
        py: 6
        // backgroundColor: 'var(--background)', // Fondo suave
      }}
    >
      {/* Título con la fuente 'Allura' */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'var(--font-allura)',
          fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, // Tamaños responsivos
          color: 'var(--foreground)',
          marginBottom: '10px',
        }}
      >
        Nos Casamos
      </Typography>

      <CoupleNames />

      {/* Subtítulo con una fuente diferente */}
      {(nameFromUrl !== '') && (
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'var(--font-opensans)', // Fuente diferente
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Tamaños responsivos
            color: 'var(--foreground)',
            lineHeight: '1.6',
          }}
        >
          Nos encantaría que seas parte de este momento tan especial para nosotros.
          <br />
          ¡Falta poco para el gran día y queremos celebrarlo contigo!
        </Typography>
      )}

      {(nameFromUrl === '') && (
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'var(--font-opensans)', // Fuente diferente
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Tamaños responsivos
            color: 'var(--foreground)',
            lineHeight: '1.6',
            mt: 4,
          }}
        >
          Queremos compartir contigo que nos casamos. Será una ceremonia muy íntima, pero no podíamos imaginar este día tan especial sin ti en nuestra celebración.
          <br />
          <br />
          Te esperamos para la fiesta, porque tu alegría es esencial para que este momento sea inolvidable.
        </Typography>
      )}

    </Box>
  );
};

export default WeddingMessage;