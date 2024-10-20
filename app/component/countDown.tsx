// // components/Countdown.tsx
// import React, { useState, useEffect } from "react";

// type TimeRemaining = {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// };

// const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
//   const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTimeRemaining = () => {
//       const now = new Date();
//       const difference = targetDate.getTime() - now.getTime();

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((difference / 1000 / 60) % 60);
//       const seconds = Math.floor((difference / 1000) % 60);

//       setTimeRemaining({ days, hours, minutes, seconds });
//     };

//     const interval = setInterval(calculateTimeRemaining, 1000);
//     return () => clearInterval(interval);
//   }, [targetDate]);

//   return (
//     <div className="flex justify-center z-10">
//       <div className="roboto flex flex-col bg-white items-center justify-center text-center rounded-full w-72 h-72 shadow-lg shadow-gray-500/50">
//         <span className="text-xl font-semibold mb-2 text-gray-600">Falta</span>
//         <div className="flex space-x-4">
//           <div className="reloj-col">
//             <span className="number text-2xl font-bold text-gray-600">
//               {timeRemaining.days}
//             </span>
//             <span className="time block text-gray-400">días</span>
//           </div>
//           <div className="reloj-col">
//             <span className="number text-2xl font-bold text-gray-600">
//               {timeRemaining.hours}
//             </span>
//             <span className="time block text-gray-400">hs</span>
//           </div>
//           <div className="reloj-col">
//             <span className="number text-2xl font-bold text-gray-600">
//               {timeRemaining.minutes}
//             </span>
//             <span className="time block text-gray-400">min</span>
//           </div>
//           <div className="reloj-col">
//             <span className="number text-2xl font-bold text-gray-600">
//               {timeRemaining.seconds}
//             </span>
//             <span className="time block text-gray-400">seg</span>
//           </div>
//         </div>
//         <div className="corazon-falta mt-6 w-12 h-12 animate-heartBeat">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className="w-full h-full"
//           >
//             <path
//               fill="#81948B"
//               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
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

// Componente para cada unidad de tiempo
const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <Box className="px-3">
    <Typography
      variant="h4"
      className="font-bold text-gray-600"
      sx={{
        fontFamily: "var(--font-opensans)",
        fontSize: "2.2rem",
      }}
    >
      {value}
    </Typography>
    <Typography
      variant="body2"
      className="text-gray-400"
      sx={{
        fontFamily: "var(--font-opensans)",
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
    <Box className="flex justify-center z-10">
      <Paper
        elevation={3}
        sx={{
          width: "18rem",
          height: "18rem",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
        }}
        className="shadow-lg shadow-gray-500/50"
      >
        <Typography
          variant="h6"
          className="mb-2 text-gray-600 font-semibold"
          sx={{
            fontFamily: "var(--font-opensans)",            
          }}
        >
          Falta
        </Typography>

        <Box className="flex">
          <TimeUnit value={timeRemaining.days} label="días" />
          <TimeUnit value={timeRemaining.hours} label="hs" />
          <TimeUnit value={timeRemaining.minutes} label="min" />
          <TimeUnit value={timeRemaining.seconds} label="seg" />
        </Box>

        <Box 
          className="mt-6 w-12 h-12 animate-heartBeat"
          sx={{
            "& svg": {
              color: "var(--color-2)",
            },
          }}
        >
          <FavoriteIcon sx={{ width: "100%", height: "100%" }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Countdown;