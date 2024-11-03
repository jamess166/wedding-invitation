import React from 'react';
import { Button } from '@mui/material';

interface CalendarButtonProps {
  fecha: string; // Fecha en formato YYYYMMDD
  horaInicio: string; // Hora de inicio en formato HHMM (por ejemplo, "1630" para 16:30)
  horaFin: string; // Hora de fin en formato HHMM (por ejemplo, "1830" para 18:30)
  titulo: string; // Título del evento
  descripcion: string; // Descripción del evento
  ubicacion: string; // Ubicación del evento
  zonaHoraria: string; // Desplazamiento de la zona horaria (ejemplo: "-0500" para UTC-5)
}

const CalendarButton: React.FC<CalendarButtonProps> = ({
  fecha,
  horaInicio,
  horaFin,
  titulo,
  descripcion,
  ubicacion,
  zonaHoraria,
}) => {
  const calculateNextDay = (date: string): string => {
    const year = parseInt(date.slice(0, 4), 10);
    const month = parseInt(date.slice(4, 6), 10) - 1; // Mes empieza desde 0 en JavaScript
    const day = parseInt(date.slice(6, 8), 10);

    const nextDay = new Date(year, month, day + 1); // Calcula el día siguiente
    const nextYear = nextDay.getFullYear();
    const nextMonth = String(nextDay.getMonth() + 1).padStart(2, '0'); // Mes en formato 2 dígitos
    const nextDate = String(nextDay.getDate()).padStart(2, '0'); // Día en formato 2 dígitos

    return `${nextYear}${nextMonth}${nextDate}`;
  };

  const endDate =
    parseInt(horaFin, 10) < parseInt(horaInicio, 10)
      ? `${calculateNextDay(fecha)}T${horaFin}00${zonaHoraria}`
      : `${fecha}T${horaFin}00${zonaHoraria}`;

  const startDate = `${fecha}T${horaInicio}00${zonaHoraria}`; // Fecha y hora de inicio con zona horaria

  // Construcción del enlace para Google Calendar
  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    titulo
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
    descripcion
  )}&location=${encodeURIComponent(ubicacion)}`;

  return (
    <Button
      variant="outlined"
      sx={{
        color: "var(--color-1)",
        borderColor: "var(--color-1)",
        fontFamily: "var(--font-opensans)",
        borderRadius: "50px",
        padding: "8px 16px",
        marginBottom: 8,
        "&:hover": {
          backgroundColor: "var(--color-4)",
          borderColor: "var(--color-2)",
        },
      }}
      onClick={() => window.open(googleCalendarLink, '_blank')}
    >
      Agendar
    </Button>
  );
};

export default CalendarButton;
