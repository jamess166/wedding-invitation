// Banner.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

interface BannerProps {
  date: string;
  names: string[];
  backgroundImage: string;
  logoImage: string;
}

const Banner: React.FC<BannerProps> = ({
  date,
  names,
  backgroundImage,
  logoImage,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "105vh", md: "105vh" },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: { xs: "100px", md: "170px" },
          backgroundImage: `url("/images/img_ondas01.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 5,
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: { xs: "20%", md: "25%" },
          color: "white",
          textAlign: "center",
          width: "100%",
          padding: "0 20px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          fontFamily: "var(--font-opensans)",
          fontSize: {xs:"1.5rem", sm:"1.8rem",md:"2.3rem"},
        }}
      >
        {date}
      </Typography>

      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: { xs: "30%", sm: "40%" },
          color: "white",
          textAlign: "center",
          width: "100%",
          padding: "0 20px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          fontFamily: "var(--font-cookie)",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "0", sm: "2.5rem" },
          fontSize: {xs: "4rem", sm: "5rem", md:"6rem"},
        }}
      >
        {names.map((name, index) => (
          <React.Fragment key={index}>
            <span>{name}</span>
            {index === 0 && (
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  backgroundColor: "var(--color-1)",
                  width: {xs: "2.5rem", sm: "3rem", md:"4rem"},
                  height: {xs: "2.5rem", sm: "3rem", md:"4rem"},                  
                  borderRadius: "50%",
                  margin: { xs: "0.5rem 0", sm: "0" },
                  fontSize: {xs: "2rem", sm: "2.5rem", md:"3.5rem"},
                }}
              >
                &
              </Box>
            )}
          </React.Fragment>
        ))}
      </Typography>

      <Box
        component="img"
        src={logoImage}
        alt="Logo de Sheyla y James"
        sx={{
          position: "absolute",
          top: "0px",
          right: "0px",
          width: { xs: "180px", sm: "200px", md: "200px", lg: "300px" },
          height: "auto",
          zIndex: 3,
        }}
      />
    </Box>
  );
};

export default Banner;
