"use client";

import '../styles/globals.css';  // Importa el archivo de estilos globales
import * as React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Button, TextField, Box } from '@mui/material';
import { useState } from 'react';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    acompanantes: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbz6Pz7wepJwoFQEcyjbibp5TP84l0RmqZidwk1fMrdmHFh4kXDBr5p_MdJVKg9kZLk7/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === 'success') {
        alert('¡Confirmación enviada con éxito!');
      } else {
        alert('Hubo un error al enviar la confirmación.');
      }
    } catch (error) {
      console.error('Error en la confirmación:', error);
      alert('Hubo un error. Por favor, intenta nuevamente.');
    }
  };

  return (
    <>
      {/* Cabecera */}
      <AppBar position="fixed" sx={{ backgroundColor: '#ff6f61' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Fiesta de Sheyla y James
          </Typography>
          <Button color="inherit" href="#bienvenidos">
            Bienvenidos
          </Button>
          <Button color="inherit" href="#fecha">
            Fecha
          </Button>
          <Button color="inherit" href="#galeria">
            Galería
          </Button>
          <Button color="inherit" href="#confirmacion">
            Confirmación
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sección de Bienvenida */}
      <Container maxWidth="lg" id="bienvenidos" sx={{ marginTop: '100px', textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          ¡Bienvenidos a nuestra boda!
        </Typography>
        <Typography variant="body1">
          Nos sentimos muy felices de poder compartir este momento tan especial con ustedes. Aquí encontrarás toda la información sobre nuestra boda.
        </Typography>
      </Container>

      {/* Sección de Fecha */}
      <Container maxWidth="lg" id="fecha" sx={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Fecha y Ubicación
        </Typography>
        <Typography variant="body1">
          ¡Te esperamos el 15 de Diciembre de 2024! La ceremonia será en el hermoso jardín de "Villa Maravilla" a las 6:00 PM. ¡No faltes!
        </Typography>
      </Container>

      {/* Sección de Galería */}
      <Container maxWidth="lg" id="galeria" sx={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Galería
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <img src="https://via.placeholder.com/300" alt="Foto 1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="https://via.placeholder.com/300" alt="Foto 2" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src="https://via.placeholder.com/300" alt="Foto 3" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>

      {/* Sección de Confirmación */}
      <Container maxWidth="lg" id="confirmacion" sx={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Confirmación de asistencia
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Correo electrónico"
              variant="outlined"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Número de acompañantes"
              variant="outlined"
              name="acompanantes"
              type="number"
              value={formData.acompanantes}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: '20px', width: '100%' }}
            >
              Enviar Confirmación
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Home;
