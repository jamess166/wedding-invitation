import React from "react";
import { Box, Typography } from "@mui/material";

interface LabelWithDecorationsProps {
  text: string;
  sx?: React.CSSProperties; // Agrega `sx` con los estilos como un objeto de CSS
}

const LabelWithDecorations: React.FC<LabelWithDecorationsProps> = ({
  text,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-2)", // Color de fondo
        padding: "10px 20px", // Añade un padding horizontal para dar espacio a las cintas
        width: "fit-content",
        margin: "0 auto",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          height: "100%", // Toma toda la altura del contenedor
          width: "20px", // Ancho de la cinta
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
        "&::before": {
          left: -18, // Ajusta la posición de la cinta izquierda
          backgroundImage: 'url("/images/img_cinta01.svg")',
        },
        "&::after": {
          right: -18, // Ajusta la posición de la cinta derecha
          backgroundImage: 'url("/images/img_cinta02.svg")',
        },
      }}
    >
      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontSize: "24px",
          color: "#fff", // Color del texto
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default LabelWithDecorations;
