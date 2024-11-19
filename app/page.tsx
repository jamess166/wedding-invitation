"use client";
import "../styles/globals.css"; // Importa el archivo de estilos globales
import * as React from "react";
import { Typography, Container, Grid, Box, Divider } from "@mui/material";
import { useState } from "react";
import Countdown from "./component/advance/countDown";
import LabelWithDecorations from "./component/title";
import DressCodeCard from "./component/dressCodeCard";
import Banner from "./component/sections/banner";
import ConfirmationForm from "./component/sections/ConfirmationForm";
import PaypalButton from "./component/buttons/paypal";
import CeremonyCard from "./component/cards/ceremonyCard";
import MusicPlayer from "./component/advance/musicPlayer";
import WeddingMessage from "./component/sections/weddingMessage";
import VerticalCardList from "./component/sections/verticalCardList";
import PhotoCollage from "./component/sections/photoCollage";
import GiftCard from "./component/cards/giftCard";
import CoupleNames from "./component/sections/coupleNames";

const Home: React.FC = () => {
  const targetDate = new Date("2025-02-01T23:59:59");

  return (
    <>
      {/* <LoadingModal /> */}
      <Banner />

      <MusicPlayer />

      <WeddingMessage />

      <Countdown targetDate={targetDate} />

      <VerticalCardList />

      <PhotoCollage />

      <Box
        mt={{ xs: 10, sm: 20 }}                
        sx={{
          maxWidth: 1800,
          padding: { xs: "0 16px", sm: "0 16px", md: 0 },
          margin: "0 auto",
          display: "flex",
          flexDirection: "column", // Apila en columna
          alignItems: "center", // Centra horizontalmente
          gap: 3, // Espaciado entre los elementos
        }}
      >
        {/* Divider después de la tercera card */}
        <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} />

        <GiftCard />

        <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} />
      </Box>

      <ConfirmationForm />
      {/* formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCounterChange={handleCounterChange}
      /> */}
    </>
  );
};

export default Home;
