import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Box, Typography, TextField } from '@mui/material';
import CustomTextField from '../customTextField';
import CustomButton from '../buttons/customButton';
import { ReceptionModal } from './receptionModal';
import { Suspense } from 'react';

const ConfirmationForm: React.FC = () => {
  const searchParams = useSearchParams(); // Obtener los parámetros de la URL

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true); // Confirmar que estamos en el cliente
  // }, []);

  // Recuperar los valores desde la URL solo en el cliente
  // const nameFromUrl = isClient ? searchParams.get('name') || '' : '';
  // const guestsFromUrl = isClient ? parseInt(searchParams.get('guests') || '1', 10) : 1;
  const nameFromUrl = searchParams.get('name') || '';
  const guestsFromUrl = parseInt(searchParams.get('guests') || '1', 10);

  // console.log(searchParams.get('name'));

  const [formData, setFormData] = useState({
    nombre: nameFromUrl, // Usar valor de la URL    
    song: '',
    acompanantes: guestsFromUrl, // Valor de acompañantes desde la URL
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

  // Efecto para mostrar el modal cuando el submitStatus sea 'success'
  useEffect(() => {
    if (submitStatus === 'success') {
      setShowModal(true);
    }
  }, [submitStatus]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCounterChange = (value: number) => {
    setFormData(prevData => ({
      ...prevData,
      acompanantes: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formPayload = {
      name: formData.nombre,      
      song: formData.song,
      acompanantes: formData.acompanantes,
    };
    console.log(formPayload);

    try {
      const response = await fetch(
        'https://api.sheetbest.com/sheets/8a0bc953-c83c-43d3-8482-64f492fdf305',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'ubXnpb1O$CvNEtEj#Q!1weuXrkoEcBIDNyR!QpgPA44l_!y%gv@#fopAJlAKn!SL', // Si es necesario
          },
          body: JSON.stringify(formPayload),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: nameFromUrl, // Restaurar valores desde la URL          
          song: '',
          acompanantes: guestsFromUrl,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg" id="confirmacion" sx={{ paddingBottom: 10, textAlign: 'center' }}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 mb-6 p-6 bg-white rounded-lg">
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'var(--font-allura)',
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            color: 'var(--foreground)',
            marginBottom: '20px',
          }}
        >
          Confirmación
        </Typography>

        <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
          <Typography gutterBottom className="mb-6 text-center text-xs">
            Nos encantaría contar con tu presencia en nuestra boda y crear juntos recuerdos inolvidables.
            Por favor, confirma tu asistencia para que podamos tener todo listo para ti.
          </Typography>

          {submitStatus === 'error' && (
            <Typography className="mb-4 text-red-600">
              Hubo un error al enviar el formulario. Por favor intenta nuevamente.
            </Typography>
          )}

          <Box sx={{ marginBottom: '40px' }}>
            <CustomTextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              disabled={!!nameFromUrl} // Campo deshabilitado
            />
          </Box>

          <Box sx={{ marginBottom: '40px' }}>
            <CustomTextField
              label="Qué canción te gustaría bailar"
              name="song"
              value={formData.song}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </Box>

          <Box
            mb={2}
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              gutterBottom
              className="mb-4 mt-4 text-center text-darkgray-600 text-md"
              sx={{ color: 'black' }}
            >
              Pase para
            </Typography>

            <Box sx={{ width: '100%' }}>
              <TextField
                value={formData.acompanantes}
                variant="standard"
                className="w-16"
                disabled
                inputProps={{
                  readOnly: true,
                  style: { textAlign: "center" },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    textAlign: "center",
                  },
                }}
              />
            </Box>
          </Box>

          <Box mb={4}>
            <CustomButton disabled={isSubmitting} />
          </Box>

          <ReceptionModal
            open={showModal}
            onClose={() => setShowModal(false)}
            name={formData.nombre}
            numInvitados={formData.acompanantes}
          />
        </Box>
      </form>
    </Container>
  );
};

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmationForm />
    </Suspense>
  );
}

