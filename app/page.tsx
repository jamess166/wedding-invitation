"use client";
import "../styles/globals.css"; // Importa el archivo de estilos globales
import * as React from "react";
import { Typography, Container, Grid, Box, Divider } from "@mui/material";
import { useState } from "react";
import Countdown from "./component/advance/countDown";
import LabelWithDecorations from "./component/title";
import DressCodeCard from "./component/dressCodeCard";
import Banner from "./component/sections/banner";
import ConfirmationForm from "./component/ConfirmationForm";
import PaypalButton from "./component/buttons/paypal";
import CeremonyCard from "./component/cards/ceremonyCard";
import MusicPlayer from "./component/advance/musicPlayer";
import WeddingMessage from "./component/sections/weddingMessage";
import VerticalCardList from "./component/sections/verticalCardList";
import PhotoCollage from "./component/sections/photoCollage";
import GiftCard from "./component/cards/giftCard";

const Home: React.FC = () => {
  const targetDate = new Date("2025-02-01T23:59:59");

  // const [formData, setFormData] = useState({
  //   nombre: "",
  //   correo: "",
  //   song: "",
  //   acompanantes: 0,
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleCounterChange = (value: number) => {
  //   setFormData({
  //     ...formData,
  //     acompanantes: value, // Actualiza el estado de acompañantes
  //   });
  // };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const response = await fetch(
  //     "https://script.google.com/macros/s/AKfycbxszrl7tiZ46McfLNI4fKYZUdf4ANh_lLxZDIX41e42oueRgyyPYIpq5u9tYVkxPULO/exec",
  //     {
  //       // Cambia por la URL de tu Apps Script
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         nombre: formData.nombre,
  //         correo: formData.correo,
  //         song: formData.song,
  //         acompañantes: formData.acompanantes, // Asegúrate de que estés almacenando este valor
  //       }),
  //     }
  //   );

  //   const data = await response.json();
  //   if (response.ok) {
  //     alert(data.message);
  //   } else {
  //     alert("Error al agregar datos: " + data.message);
  //   }
  // };

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
        mt={{ xs: 20, sm: 20 }}                
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
