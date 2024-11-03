import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarButton from "../buttons/calendarButton";
import MapButton from "../buttons/mapbutton";

const ReceptionCard: React.FC = () => {
  const title = "Recepción";
  const date = "Sábado 01 de Febrero - 19:00 hr";
  const address = "La Estancia La Encalada";

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
        src="/images/reception.png" // Ruta de la imagen
        alt="Descripción de la imagen"
        pb={2}
        sx={{
          width: { xs: "55%", md: "60%" }, // Controla el tamaño máximo: 100% en xs y 50% en md
          height: "auto",
        }}
      />

      {/* Detalles de la ceremonia */}
      <Typography
        textAlign="center"
        className="font-bold text-gray-600"
        pb={4}
        sx={{
          fontFamily: "var(--font-roboto)",
          fontSize: "2.3rem",
          color: "var(--color-6)",
        }}
      >
        {title}
      </Typography>

      {/* Detalles de la ceremonia */}
      <Typography
        textAlign="center"
        mb={2}
        sx={{
          fontFamily: "var(--font-roboto)",
          fontSize: "1.2rem",
          color: "var(--color-6)",
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
          color: "var(--color-2)",
        }}
      >
        {date} {/* Uso de la fecha manual */}
      </Typography>

      {/* Botón Agendar */}
      <CalendarButton
        fecha="20250201" // 1 de febrero de 2025
        horaInicio="1900" // 19:00 en formato HHMM
        horaFin="0300" // 18:30 en formato HHMM
        titulo="Recepción de Boda Sheyla y James"
        descripcion="¡A celebrar el amor de Sheyla y James! 🎉 Será una fiesta increíble con mucha alegría, música y buenos momentos."
        ubicacion="Estancia La Encalada, Prolongación Av. Fátima 422, Trujillo 13001, Peru"
        zonaHoraria="-0500" // Ajuste para UTC-5
      />

      {/* Dirección */}
      <Typography
        textAlign="center"
        mb={2}
        sx={{
          fontFamily: "var(--font-roboto)",
          fontSize: "1.2rem",
          color: "var(--color-6)", // Gris suave
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
          color: "var(--color-2)", // Verde medio
        }}
      >
        {address}
        <br />
        Prolongación Av. Fátima 422, Trujillo
      </Typography>

      {/* Botón Cómo llegar */}
      <MapButton
        url="https://maps.app.goo.gl/tphRy9N8mAgWE6Sv7"
      />
    </Box>
  );
};

export default ReceptionCard;