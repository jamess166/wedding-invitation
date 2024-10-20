// ConfirmationForm.tsx
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import CustomTextField from './customTextField';
import Counter from './numeric-input-field';
import CustomButton from './customButton';

interface ConfirmationFormProps {
  formData: {
    nombre: string;
    correo: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleCounterChange: (value: number) => void;
}

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  handleCounterChange
}) => {
  return (
    <Container
      maxWidth="lg"
      id="confirmacion"
      sx={{ marginTop: '40px', textAlign: 'center' }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 mb-6 p-6 bg-white rounded-lg"
      >
        <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
          <Typography
            gutterBottom
            className="mb-4 text-center text-gray-400 text-xs"
          >
            Por favor responda antes de 01 de Febrero
          </Typography>

          <Box sx={{ marginBottom: '40px' }}>
            <CustomTextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ marginBottom: '40px' }}>
            <CustomTextField
              label="Correo electrónico"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </Box>

          <Box
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
              sx={{ color: '#4a4a4a' }}
            >
              Acompañantes
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Counter min={1} max={3} onChange={handleCounterChange} />
            </Box>
          </Box>

          <CustomButton />
        </Box>
      </form>
    </Container>
  );
};

export default ConfirmationForm;