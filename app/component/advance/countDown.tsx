import React, { useState, useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface TimeRemainingType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <Box
    className="px-3"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centra ambos textos
    }}
  >
    <Typography
      variant="h4"
      className="font-bold text-gray-600"
      sx={{
        fontFamily: "var(--font-opensans)",
        fontSize: { xs: "2rem", md: "2.5rem", xl: "4rem" },
      }}
    >
      {value}
    </Typography>
    <Typography
      variant="body2"
      className="text-gray-400"
      sx={{
        fontFamily: "var(--font-opensans)",
        marginTop: "0.2rem", // Ajusta el espacio entre número y etiqueta
      }}
    >
      {label}
    </Typography>
  </Box>
);


const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemainingType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeRemaining, 1000);
    calculateTimeRemaining(); // Calcula inmediatamente al montar
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Box
      className="flex justify-center z-10"
      mt={{xs:20, md:35}}
      mb={{xs:25, md:35}}
      // elevation={3}
      sx={{
        // width: "20rem", // Aumenté un poco el ancho para que se vea más espacioso
        height: "auto", // Cambié la altura a automática para adaptarse al contenido
        // borderRadius: "8px", // Cambié de círculo a esquinas redondeadas
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // bgcolor: "background.paper",
      }}
    // className="shadow-lg shadow-gray-500/50"
    >
      <Typography
        variant="h5"         
        className="mb-4 text-gray-600 text-center font-bold" // Mayor espacio inferior
        pb={5}
        sx={{
          fontFamily: "var(--font-opensans)",
          fontSize:{xs:"2rem", sm:"2.3rem", md:"2.5rem", xl:"3rem"}
        }}
      >
        01 de  Febrero  2025
      </Typography>

      <Box className="flex items-center space-x-4"> {/* Agregué espacio entre las unidades */}
        <TimeUnit value={timeRemaining.days} label="días" />
        <Divider orientation="vertical" flexItem sx={{ borderColor: "gray.400" }} /> {/* Línea vertical */}
        <TimeUnit value={timeRemaining.hours} label="hs" />
        <Divider orientation="vertical" flexItem sx={{ borderColor: "gray.400" }} /> {/* Línea vertical */}
        <TimeUnit value={timeRemaining.minutes} label="min" />
        <Divider orientation="vertical" flexItem sx={{ borderColor: "gray.400" }} /> {/* Línea vertical */}
        <TimeUnit value={timeRemaining.seconds} label="seg" />
      </Box>
    </Box>
  );
};

export default Countdown;