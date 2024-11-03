// import React from "react";
// import { useMediaQuery, useTheme, Box, Typography } from "@mui/material";

// const Banner = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

//   // Selecciona la imagen de fondo según el tamaño de la pantalla
//   const backgroundImage = isSmallScreen
//     ? "url(/images/banner_4.jpeg)"
//     : "url(/images/banner_2.jpeg)";

//   return (
//     <Box
//       sx={{
//         height: "100vh", // Toda la altura de la pantalla
//         backgroundImage: backgroundImage,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         textAlign: "center",
//         "&::after": {
//           content: '""',
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: { xs: "100%", md: "100%" },
//           height: { xs: "18%", sm: "28%", md: "40%", lg: "45%", xl: "70%" },
//           backgroundImage: `url('/images/torn_edge.png')`, // imagen de borde rasgado
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         },
//       }}
//     >
//       <Box zIndex={2}>
//         <Typography py={{ xs: 2, md: 3, xl: 4 }} variant="h1" sx={{ fontSize: { xs: "5rem", sm: "6rem", md: "6.5rem", xl: "7rem" }, lineHeight: "1", fontFamily: "var(--font-dancing)", }}>
//           01
//         </Typography>
//         <br />
//         <Typography py={{ xs: 2, md: 3, xl: 4 }} variant="h1" sx={{ fontSize: { xs: "5rem", sm: "6rem", md: "6.5rem", xl: "7rem" }, lineHeight: "1", fontFamily: "var(--font-dancing)", }}>
//           FEB
//         </Typography>
//         <br />
//         <Typography py={{ xs: 2, md: 3, xl: 4 }} variant="h1" sx={{ fontSize: { xs: "5rem", sm: "6rem", md: "6.5rem", xl: "7rem" }, lineHeight: "1", fontFamily: "var(--font-dancing)", }}>
//           2025
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Banner;
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { FC } from "react";

const Banner: FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const backgroundImage = isSmallScreen
    ? "url(/images/banner_2.jpeg)"
    : "url(/images/banner_2.jpeg)";

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Main background container */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Capa de opacidad */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Capa negra con opacidad
          }}
        />
        {/* Content container */}
        <Box
          sx={{
            mt: {xs:30, md:20, xl:20},
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            py={{ xs: 2, md: 0, xl: 2 }}
            variant="h1"
            sx={{
              fontSize: { xs: "5rem", sm: "6rem", md: "5rem", xl: "6rem" },
              lineHeight: "1",
              fontFamily: "var(--font-dancing)",
            }}
          >
            01
          </Typography>
          <br />
          <Typography
            py={{ xs: 2, md: 1, xl: 2 }}
            variant="h1"
            sx={{
              fontSize: { xs: "5rem", sm: "6rem", md: "5rem", xl: "6rem" },
              lineHeight: "1",
              fontFamily: "var(--font-dancing)",
            }}
          >
            FEB
          </Typography>
          <br />
          <Typography
            py={{ xs: 2, md: 1, xl: 2 }}
            variant="h1"
            sx={{
              fontSize: { xs: "5rem", sm: "6rem", md: "5rem", xl: "6rem" },
              lineHeight: "1",
              fontFamily: "var(--font-dancing)",
            }}
          >
            2025
          </Typography>
        </Box>
      </Box>

      {/* Imagen SVG de fondo con efecto de papel rasgado */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100px', // Ajusta la altura según sea necesario
          backgroundImage: `url('/images/img_torn.svg')`, // URL de la imagen SVG rasgada
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: 'rotate(180deg)', // Rota la imagen 180 grados
          zIndex: 3,          
        }}
      />

      {/* Torn edge overlay */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 0, // Altura inicial 0
          paddingTop: {
            xs: "10%",
          },
          backgroundImage: `url('/images/img_torn.svg')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.01)", // Evita pequeños gaps en los bordes
          zIndex: 1,
        }}
      /> */}
    </Box>
  );
};

export default Banner;
