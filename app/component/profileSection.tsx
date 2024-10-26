import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Roboto_Mono, Roboto, Allura } from "next/font/google";
// import ResponsiveGridComponent from "./responsiveGridComponent";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"], // Define el subconjunto de caracteres (en este caso 'latin')
  weight: ["400", "700"], // Opcional: Define los pesos que vas a utilizar
  style: ["normal", "italic"], // Opcional: Define los estilos que vas a utilizar
  display: "swap", // Opcional: Mejora la carga de la fuente
});

const roboto = Roboto({
  subsets: ["latin"], // Define el subconjunto de caracteres (en este caso 'latin')
  weight: ["400", "700"], // Opcional: Define los pesos que vas a utilizar
  style: ["normal", "italic"], // Opcional: Define los estilos que vas a utilizar
  display: "swap", // Opcional: Mejora la carga de la fuente
});

const allura = Allura({
  subsets: ["latin"], // Define el subconjunto de caracteres
  weight: ["400", "400"], // Define los pesos que vas a utilizar (si es necesario)
  style: ["normal"], // Define los estilos que vas a utilizar (si es necesario)
  display: "swap", // Mejora la carga de la fuente
});

const ProfileSection: React.FC = () => {
  return (
    <Box
      sx={{ padding: 0, maxWidth: 800, marginX: "auto", marginTop: "0 auto" }}
    >
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        {/* Texto a la izquierda en pantallas grandes, y debajo de la imagen en pantallas pequeñas */}
        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1 } }}>
          <Typography
            variant="h4"
            mt={{xs:2, sm:0}}
            mb={2}
            gutterBottom
            className={roboto_mono.className}
            color="black"
            textAlign={{xs:'center', sm:'left'}}
          >
            01.02.2025
          </Typography>
          <Typography
            variant="body1"
            className={roboto.className}
            sx={{ fontSize: "1.1rem", color: "black" }}
            m={{xs:4, sm:0}}
            textAlign={'justify'}
          >
            Nos complace anunciar nuestro matrimonio.
            <br />
            <br />
            Estás cordialmente invitado a celebrar nuestra unión. No podemos
            esperar para vivir este momento contigo.
          </Typography>
        </Grid>

        {/* <ResponsiveGridComponent imageSrc="/images/profile.jpeg" allura={allura} /> */}

      </Grid>
    </Box>
  );
};

export default ProfileSection;
