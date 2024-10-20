"use client";
import Image from "next/image";
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
  Paper,
} from "@mui/material";
import { useState } from "react";
import Counter from "./component/numeric-input-field";
import CustomTextField from "./component/customTextField";
import ProfileSection from "./component/profileSection";

// import {
//   Roboto_Mono,
//   Roboto,
//   Allura,
//   Gloria_Hallelujah,
// } from "next/font/google";
import Countdown from "./component/countDown";
import WavyImageBox from "./component/wavyImageBox";
import LoadingModal from "./component/loadingModal";
import LabelWithDecorations from "./component/title";
import DressCodeCard from "./component/dressCodeCard";
import CustomButton from "./component/customButton";
import Banner from "./component/banner";
import ConfirmationForm from "./component/ConfirmationForm";

// const roboto = Roboto({
//   subsets: ["latin"], // Define el subconjunto de caracteres (en este caso 'latin')
//   weight: ["400", "700"], // Opcional: Define los pesos que vas a utilizar
//   style: ["normal", "italic"], // Opcional: Define los estilos que vas a utilizar
//   display: "swap", // Opcional: Mejora la carga de la fuente
// });

// const roboto_mono = Roboto_Mono({
//   subsets: ["latin"], // Define el subconjunto de caracteres (en este caso 'latin')
//   weight: ["300"], // Opcional: Define los pesos que vas a utilizar
//   style: ["normal", "italic"], // Opcional: Define los estilos que vas a utilizar
//   display: "swap", // Opcional: Mejora la carga de la fuente
// });

// const gloria_Hallelujah = Gloria_Hallelujah({
//   subsets: ["latin"], // Define el subconjunto de caracteres (en este caso 'latin')
//   weight: ["400"], // Opcional: Define los pesos que vas a utilizar
//   style: ["normal"], // Opcional: Define los estilos que vas a utilizar
//   display: "swap", // Opcional: Mejora la carga de la fuente
// });

const Home: React.FC = () => {
  const targetDate = new Date("2025-02-01T23:59:59");

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
      {/* <LoadingModal /> */}

      <Banner
        date="01.02.2025"
        names={["Sheyla", "James"]}
        backgroundImage="/images/banner.jpg"
        logoImage="/images/logo.png"
      />

      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute", // Asegúrate de que el Countdown se posicione correctamente
            // alignItems:"center",
            left: "50%",
            transform: "translateX(-50%)",
            // margin: "0,0,0,-500px",
            top: { xs: "-110px", sm: "-150px" }, // Ajusta la posición vertical del Countdown
            zIndex: 10, // Asegúrate de que tenga un zIndex mayor
          }}
        >
          <Countdown targetDate={targetDate} />
        </Box>
      </Box>

      {/* <Box mt={{ xs: 30, sm: 30 }}>
        <Box mb={4} className="flex justify-center items-center">
          <Paper
            elevation={3}
            sx={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "white",
              position: "relative",
              overflow: "hidden", // Para asegurar que la imagen no sobresalga del círculo
            }}
            className="shadow-lg shadow-gray-500/50"
          >
            <Box className="w-32 h-32 relative animate-swing">
              <Image
                src="images/img_circuloCeremonia.svg"
                alt="Ceremony rings"
                layout="fill" // Cambia "fill" a "layout='fill'" para usar el comportamiento de Next.js
                objectFit="contain" // Usa la propiedad objectFit directamente en Next.js
              />
            </Box>
          </Paper>
        </Box>

        <LabelWithDecorations text="Ceremonia" />

        <Typography>
          Día
        </Typography>
      </Box> */}

      <Box
        mt={{ xs: 30, sm: 30 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: "var(--background)", // Fondo general de la sección
          padding: "20px",
          borderRadius: "16px", // Bordes redondeados suaves
          maxWidth: "350px", // Ancho máximo para el contenedor
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Suave sombra para dar profundidad
        }}
      >
        {/* Imagen circular */}
        <Box className="flex justify-center items-center mb-4">
          <Paper
            elevation={0}
            sx={{
              width: "200px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "4px solid var(--color-7)", // Borde de color dorado suave
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--color-4)", // Fondo claro del círculo
            }}
          >
            <Box className="w-32 h-32 relative animate-swing">
              <Image
                src="images/img_circuloCeremonia.svg"
                alt="Ceremony rings"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Paper>
        </Box>

        {/* Título con decoraciones */}
        <LabelWithDecorations
          text="Ceremonia"
          sx={{
            fontFamily: "var(--font-allura)", // Fuente elegante
            fontSize: "2rem",
            color: "var(--color-1)", // Color verde oscuro para el título
          }}
        />

        {/* Detalles de la ceremonia */}
        <Typography
          textAlign="center"
          sx={{
            fontFamily: "var(--font-roboto)",
            fontSize: "1.2rem",
            color: "var(--color-6)", // Texto de color gris suave
            marginBottom: "8px",
          }}
        >
          Día
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            fontFamily: "var(--font-opensans)",
            fontSize: "1rem",
            color: "var(--color-2)", // Color verde medio para la fecha
            marginBottom: "16px",
          }}
        >
          Sábado 01 de Febrero - 16:30 hr
        </Typography>

        {/* Botón Agendar */}
        <Button
          variant="outlined"
          // sx={{
          //   color: "white",
          //   fontFamily: "var(--font-opensans)",
          //   borderRadius: "50px",
          //   padding: "8px 16px",
          //   marginBottom: "16px",
          //   "&:hover": {
          //     backgroundColor: "var(--color-2)", // Efecto hover más claro
          //   },
          // }}
          sx={{
            color: "var(--color-1)", // Color verde oscuro
            borderColor: "var(--color-1)", // Borde en verde oscuro
            fontFamily: "var(--font-opensans)",
            borderRadius: "50px",
            padding: "8px 16px",
            marginBottom: "16px",
            "&:hover": {
              backgroundColor: "var(--color-4)", // Fondo claro al pasar el ratón
              borderColor: "var(--color-2)", // Cambio de borde en hover
            },
          }}
        >
          Agendar
        </Button>

        {/* Dirección */}
        <Typography
          textAlign="center"
          sx={{
            fontFamily: "var(--font-roboto)",
            fontSize: "1.2rem",
            color: "var(--color-6)", // Gris suave
            marginBottom: "8px",
          }}
        >
          Dirección
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            fontFamily: "var(--font-opensans)",
            fontSize: "1rem",
            color: "var(--color-2)", // Verde medio
            marginBottom: "16px",
          }}
        >
          Catedral de Trujillo
        </Typography>

        {/* Botón Cómo llegar */}
        <Button
          variant="outlined"
          sx={{
            color: "var(--color-1)", // Color verde oscuro
            borderColor: "var(--color-1)", // Borde en verde oscuro
            fontFamily: "var(--font-opensans)",
            borderRadius: "50px",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: "var(--color-4)", // Fondo claro al pasar el ratón
              borderColor: "var(--color-2)", // Cambio de borde en hover
            },
          }}
        >
          Cómo llegar
        </Button>
      </Box>

      {/* <Box
        mt={{ xs: 30, sm: 30 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box className="flex justify-center items-center">
          <Paper
            elevation={0} // Cambia la elevación a 0 para eliminar el borde del card
            sx={{
              width: "200px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "transparent", // Fondo transparente
              position: "relative",
              overflow: "hidden",
            }}
            className="shadow-none" // Remueve cualquier sombra de Tailwind si es necesario
          >
            <Box className="w-32 h-32 relative animate-swing">
              <Image
                src="images/img_circuloCeremonia.svg"
                alt="Ceremony rings"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Paper>
        </Box>

        <LabelWithDecorations text="Ceremonia" />

        <Typography textAlign="center">Día</Typography>
        <Typography textAlign="center">Sádado 01 de Febrero - 16:30 hr</Typography>
        <Button>Agendar</Button>

        <Typography textAlign="center">Dirección</Typography>
        <Typography textAlign="center">Catedral de Trujillo</Typography>
        <Button>Como llegar</Button>
      </Box> */}

      <Box m={6}>
        <LabelWithDecorations text="Celebración" />
      </Box>

      <DressCodeCard />

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

      <ConfirmationForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCounterChange={handleCounterChange}
      />
    </>
  );
};

export default Home;
