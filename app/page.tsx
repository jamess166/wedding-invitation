"use client";

import "../styles/globals.css"; // Importa el archivo de estilos globales
import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useState } from "react";
import NumericInputField from './component/numeric-input-field';
import Counter from "./component/numeric-input-field";

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    acompanantes: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCounterChange = (value: number) => {
    setFormData({
      ...formData,
      acompanantes: value, // Actualiza el estado de acompañantes
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz6Pz7wepJwoFQEcyjbibp5TP84l0RmqZidwk1fMrdmHFh4kXDBr5p_MdJVKg9kZLk7/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === "success") {
        alert("¡Confirmación enviada con éxito!");
      } else {
        alert("Hubo un error al enviar la confirmación.");
      }
    } catch (error) {
      console.error("Error en la confirmación:", error);
      alert("Hubo un error. Por favor, intenta nuevamente.");
    }
  };

  return (
    <>
      {/* Cabecera */}
      {/* <AppBar position="fixed" sx={{ backgroundColor: '#ff6f61' }}>
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
      </AppBar> */}

      {/* Banner */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url('/images/banner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Capa de opacidad (Overlay) */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        />

        {/* Logo superpuesto */}
        <Box
          component="img"
          src="/images/logo.png"
          alt="Logo de Sheyla y James"
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: '250px', sm: '250px', md: '350px', lg: '450px' },
            height: "auto",
            zIndex: 3,
          }}
        />
      </Box>

      {/* Sección de Bienvenida */}
      <Container
        maxWidth="lg"
        id="bienvenidos"
        sx={{ marginTop: "100px", textAlign: "center" }}
      >
        <Typography variant="h3" gutterBottom>
          ¡Bienvenidos a nuestra boda!
        </Typography>
        <Typography variant="body1">
          Nos sentimos muy felices de poder compartir este momento tan especial
          con ustedes. Aquí encontrarás toda la información sobre nuestra boda.
        </Typography>
      </Container>

      {/* Sección de Fecha */}
      <Container
        maxWidth="lg"
        id="fecha"
        sx={{ marginTop: "40px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Fecha y Ubicación
        </Typography>
        <Typography variant="body1">
          ¡Te esperamos el 15 de Diciembre de 2024! La ceremonia será en el
          hermoso jardín de "Villa Maravilla" a las 6:00 PM. ¡No faltes!
        </Typography>
      </Container>

      {/* Sección de Galería */}
      <Container
        maxWidth="lg"
        id="galeria"
        sx={{ marginTop: "40px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Galería
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src="https://via.placeholder.com/300"
              alt="Foto 1"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src="https://via.placeholder.com/300"
              alt="Foto 2"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src="https://via.placeholder.com/300"
              alt="Foto 3"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Sección de Confirmación */}
      <Container
        maxWidth="lg"
        id="confirmacion"
        sx={{ marginTop: "40px", textAlign: "center" }}
      >

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 mb-6 p-6 bg-white rounded-lg">
          <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
            <Typography gutterBottom className="mb-4 text-left text-gray-600 text-md">
              Por favor responda antes de 01 de Febrero
            </Typography>
            {/* <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              className="mb-4"
            /> */}
            <TextField
              label="Nombre"
              variant="standard" // Usa 'standard' para solo una línea inferior
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              sx={{ borderBottom: '1.5px solid',color: 'black' }} 
            />
            <TextField
              label="Correo electrónico"
              variant="standard"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              className="mb-4"
              sx={{ borderBottom: '1.5px solid',color: 'black'  }}
            />
            {/* <Counter min={0} max={3} />   
             */}

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography gutterBottom className="mb-4 mt-4 text-center text-gray-800 text-md">
                Acompañantes
              </Typography>
              <Box sx={{ width: '100%' }}>
                <Counter min={0} max={3} onChange={handleCounterChange} />
              </Box>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "20px",
                width: "100%",
                backgroundColor: "#6a714f", // Verde principal
                color: "white", // Texto blanco
                '&:hover': {
                  backgroundColor: "#5d6445", // Verde más oscuro al pasar el ratón
                },
                '&:active': {
                  backgroundColor: "#373d2a", // Verde aún más oscuro al hacer clic
                },
                borderRadius: "8px", // Bordes redondeados
                paddingY: "px", // Padding vertical
                fontSize: "14px", // Tamaño de fuente
              }}
            >
              Enviar Confirmación
            </Button>

            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "20px", width: "100%" }}
              className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700"
            >
              Enviar Confirmación
            </Button> */}
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Home;
