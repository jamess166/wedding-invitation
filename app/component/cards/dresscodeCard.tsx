import React from "react";
import { Box, Typography } from "@mui/material";

interface ColorCircleProps {
    color: string;
}

const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => (
    <div
        className="w-12 h-12 rounded-full transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: color }}
    />
);

const DressCodeCard: React.FC = () => {
    const colors = [
        // "#F5E6E0", // cream
        // "#E5C4B4", // peach
        // "#D4C4B7", // beige
        // "#C9C4C7", // light gray
        // "#A69389", // taupe
        "#374977", // azul
        "#CB8E7B", // terracotta
        "#A3AB8B", // sage
        "#8C9A9A", // gray-green
        "#0b3c39"
    ];

    const colorsMan = [
        "#272121",
        "#374977",
        "#D4C4B7", // beige
        "#C9C4C7", // light gray
    ];

    return (
        <Box
            pt={6}
            pb={2}
            width={{ xs: 350, sm: 450 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                maxWidth: "550px",
            }}
        >
            <Box
                component="img"
                src="/images/dresscode.png"
                alt="Dress Code Icon"
                pb={8}
                sx={{
                    width: { xs: "40%", md: "40%" },
                    height: "auto",
                }}
            />

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
                Código de Vestimenta
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
                Mujeres
            </Typography>

            {/* <div className="grid grid-cols-5 gap-4 mb-8 px-4">
        {colors.slice(0, 5).map((color, index) => (
          <ColorCircle key={index} color={color} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mb-8 px-4">
        {colors.slice(5).map((color, index) => (
          <ColorCircle key={index} color={color} />
        ))}
      </div> */}

            <div className="grid grid-cols-5 gap-4 mb-8 px-4">
                {colors.slice(0, 5).map((color, index) => (
                    <ColorCircle key={index} color={color} />
                ))}
            </div>

            {/* Detalles de la ceremonia */}
            <Typography
                textAlign="center"
                mt={4}
                mb={2}
                sx={{
                    fontFamily: "var(--font-roboto)",
                    fontSize: "1.2rem",
                    color: "var(--color-6)",
                }}
            >
                Hombres
            </Typography>

            <div className="grid grid-cols-4 gap-4 mb-8 px-4">
                {colorsMan.slice(0, 5).map((color, index) => (
                    <ColorCircle key={index} color={color} />
                ))}
            </div>

            <Typography
                textAlign="center"
                mb={4}
                sx={{
                    fontFamily: "var(--font-opensans)",
                    fontSize: "1.1rem",
                    color: "var(--color-2)",
                    maxWidth: "80%",
                    lineHeight: 1.6,
                }}
            >
                Les pedimos amablemente a nuestros invitados que vistan en estos tonos
                para nuestro día especial
            </Typography>
        </Box>
    );
};

export default DressCodeCard;