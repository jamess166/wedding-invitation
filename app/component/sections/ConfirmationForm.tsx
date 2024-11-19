// ConfirmationForm.tsx
import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import CustomTextField from '../customTextField';
import Counter from '../numeric-input-field';
import CustomButton from '../buttons/customButton';

const ConfirmationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    song: '',
    acompanantes: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitStatus('idle');

  //   const formPayload = {
  //     nombre: formData.nombre,
  //     correo: formData.correo,
  //     song: formData.song,
  //     acompanantes: formData.acompanantes
  //   };

  //   try {
  //     // Usar URL de tu script de Google
  //     const response = await fetch(
  //       'https://script.google.com/macros/s/AKfycbwRVTq_jE4vIVK55X-8ZmAScoTtDW2oH4FX8bBnDXA1WeBJD_gLLyMSAfiN02XpNcHR/exec',
  //       {
  //         redirect: 'follow',
  //         method: 'POST',
  //         mode: 'no-cors', // Cambiado a no-cors
  //         headers: {
  //           'Content-Type': 'text/plain;charset=utf-8',
  //         },
  //         body: JSON.stringify(formPayload)
  //       }
  //     );

  //     // Con no-cors no podemos leer la respuesta, así que asumimos éxito si no hay error
  //     setSubmitStatus('success');
  //     setFormData({
  //       nombre: '',
  //       correo: '',
  //       song: '',
  //       acompanantes: 1,
  //     });
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setSubmitStatus('error');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle'); // Estado inicial

    const formPayload = {
      name: formData.nombre,
      email: formData.correo,
      song: formData.song,
      acompanantes: formData.acompanantes
    };

    try {
      const response = await fetch(
        'https://api.sheetbest.com/sheets/8a0bc953-c83c-43d3-8482-64f492fdf305',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY', // Si es necesario
          },
          body: JSON.stringify(formPayload)
        }
      );

      // Verificamos si la respuesta fue exitosa (código 200)
      if (response.ok) {
        // Intentamos leer la respuesta en JSON (aunque puede no ser posible con CORS)
        // const result = await response.json().catch((err) => {
        //   console.error('Error al parsear JSON:', err);
        //   return null; // Si no podemos parsear el JSON, manejamos el error
        // });

        // console.log(result)

        // Si se pudo obtener un JSON y tiene un resultado de éxito
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            nombre: '',
            correo: '',
            song: '',
            acompanantes: 1,
          });

        } else {
          // Si la respuesta no es exitosa (según el contenido del JSON)
          setSubmitStatus('error');
        }
      } else {
        // Si el código de estado no es 200, marcamos como error
        console.error('Error en la respuesta:', response.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setSubmitStatus('error'); // Cambia el estado a error si algo falla
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Container maxWidth="lg" id="confirmacion" sx={{ paddingBottom: 10, textAlign: 'center' }}>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-20 mb-6 p-6 bg-white rounded-lg"
      >

        <Typography
          variant="h1"
          sx={{
            fontFamily: 'var(--font-allura)',
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, // Tamaños responsivos
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
            Además, al confirmar, compártenos una canción que te gustaría disfrutar y bailar en nuestra pista de baile.
          </Typography>

          {submitStatus === 'success' && (
            <Typography className="mb-4 text-green-600">
              ¡Gracias por confirmar tu asistencia!
            </Typography>
          )}

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
              disabled={isSubmitting}
            />
          </Box>

          <Box sx={{ marginBottom: '40px' }}>
            <CustomTextField
              label="Correo electrónico"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </Box>

          <Box sx={{ marginBottom: '40px' }}>
            <CustomTextField
              label="Que canción te gustaría Bailar"
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
              Acompañantes
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Counter
                min={1}
                max={3}
                onChange={handleCounterChange}
                disabled={isSubmitting}
              />
            </Box>
          </Box>
          <Box mb={4}>
            <CustomButton disabled={isSubmitting} />
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default ConfirmationForm;