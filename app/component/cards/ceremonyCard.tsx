import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarButton from "../buttons/calendarButton";
import MapButton from "../buttons/mapbutton";

const CeremonyCard: React.FC = () => {
  const title = "Ceremonia";
  const date = "Sábado 01 de Febrero - 16:00 hr";
  const address = "Catedral de Trujillo";

  return (
    <Box
      pt={6}
      pb={2}
      width={{ xs: 350, sm: 450 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        // background:"var(--color-5)",
        borderTop: "0px solid var(--color-1)",
        borderBottom: "0px solid var(--color-1)",
        maxWidth: "550px",
      }}
    >
      <Box
        component="img"
        src="/images/church.png" // Ruta de la imagen
        alt="Descripción de la imagen"
        pb={0}
        sx={{
          width: { xs: "100%", md: "90%" }, // Controla el tamaño máximo: 100% en xs y 50% en md
          height: "auto",
        }}
      />

      {/* Detalles de la ceremonia */}
      <Typography
        textAlign="center"
        pb={2}
        sx={{
          fontFamily: "var(--font-allura)",
          fontSize: "3.5rem",
          color: "var(--foreground)",
        }}
      >
        {title}
      </Typography>

      {/* Detalles de la ceremonia */}
      <Typography
        textAlign="center"
        mb={0}
        sx={{
          fontFamily: "var(--font-roboto)",
          fontSize: "1.2rem",
          color: "var(--foreground)",
        }}
      >
        Día
      </Typography>

      <Typography
        textAlign="center"
        mb={2}
        sx={{
          fontFamily: "var(--font-opensans)",
          fontSize: "1rem",
          color: "var(--foreground)",
        }}
      >
        {date} {/* Uso de la fecha manual */}
      </Typography>

      {/* Botón Agendar */}
      <CalendarButton
        fecha="20250201" // 1 de febrero de 2025
        horaInicio="1600" // 16:00 en formato HHMM
        horaFin="1830" // 18:30 en formato HHMM
        titulo="Boda de Sheyla y James"
        descripcion="¡A celebrar el amor de Sheyla y James! 🎉 Será una fiesta increíble con mucha alegría, música y buenos momentos."
        ubicacion="Trujillo Cathedral Basilica, Jirón Orbegoso 451, Trujillo 13001, Peru"
        zonaHoraria="-0500" // Ajuste para UTC-5
      />

      {/* Dirección */}
      <Typography
        textAlign="center"
        mb={0}
        sx={{
          fontFamily: "var(--font-roboto)",
          fontSize: "1.2rem",
          color: "var(--foreground)", // Gris suave
        }}
      >
        Dirección
      </Typography>

      <Typography
        textAlign="center"
        mb={2}
        sx={{
          fontFamily: "var(--font-opensans)",
          fontSize: "1rem",
          color: "var(--foreground)", // Verde medio
        }}
      >
        {address}
      </Typography>

      {/* Botón Cómo llegar */}
      <MapButton
        url="https://maps.app.goo.gl/F2i8gqUHpb8eoscw6"
      />
    </Box>
  );
};

export default CeremonyCard;
