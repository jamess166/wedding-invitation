import React from "react";
import { Box, Typography } from "@mui/material"; // Usamos Box de MUI para un contenedor flexible
import Image from "next/image"; // Next.js Image component para optimizar las imágenes

const PhotoCollage: React.FC = () => {
    const images = [
        "/collage/01.jpg",
        // "/collage/02.jpg",
        "/collage/04.jpg",
        "/collage/03.jpg",
        "/collage/05.jpg",
    ];

    return (
        <Box
            mt={10}
            pt={6}
            pb={0}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className="w-full max-w-5xl mx-auto"
        >
            {/* Título */}
            {/* <h2 className="text-center text-3xl font-bold text-gray-700 mb-6">
        Nuestra Historia
      </h2> */}
            {/* Título con la fuente 'Allura' */}
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'var(--font-allura)',
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, // Tamaños responsivos
                    color: 'var(--foreground)',
                    marginBottom: '40px',
                }}
            >
                Nuestra Historia
            </Typography>

            {/* Collage de imágenes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <Image
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Descripción */}
            {/* <p className="text-center mt-6 text-lg text-gray-600 max-w-xl mx-auto">
                Cada momento juntos ha sido especial
            </p> */}
        </Box>
    );
};

export default PhotoCollage;
