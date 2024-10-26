import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import Image from "next/image"; // Asegúrate de tener configurado Next.js para imágenes
import LabelWithDecorations from "./title";

const CelebrationCard: React.FC = () => {
  const title = "Ceremonia"; // Título manual
  const date = "Sábado 01 de Febrero - 16:30 hr"; // Fecha manual
  const address = "Catedral de Trujillo"; // Dirección manual

  return (
    <Box
      // mt={{ xs: 30, sm: 2 }}
      pt={4}
      pb={6}
      width={{ xs: 350, sm: 400 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundColor: "var(--color-4)", // Fondo general de la sección
        borderRadius: "16px", // Bordes redondeados suaves
        maxWidth: "450px", // Ancho máximo para el contenedor
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Suave sombra para dar profundidad
      }}
    >
      {/* Imagen circular */}
      <Box className="flex justify-center items-center my-4 mx-4">
        <Paper
          elevation={0}
          sx={{
            width: "150px",
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "2px solid var(--color-7)", // Borde de color dorado suave
            position: "relative",
            overflow: "hidden",
            backgroundColor: "var(--color-4)", // Fondo claro del círculo
          }}
        >
          <Box className="w-28 h-28 relative animate-swing">
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
        text={title} // Uso del título manual
        sx={{
          fontFamily: "var(--font-allura)", // Fuente elegante
          fontSize: "1rem",
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
          marginY: "10px",
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
        {date} {/* Uso de la fecha manual */}
      </Typography>

      {/* Botón Agendar */}
      <Button
        variant="outlined"
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
        {address} {/* Uso de la dirección manual */}
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
  );
};

export default CelebrationCard;
