import { Box, Typography } from '@mui/material';
import React from 'react';

const CoupleNames = () => {
    return (
        <Box
            className="flex flex-col items-center justify-center my-8 space-y-4"
        >
            {/* Nombre 1 */}
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'var(--font-allura)',
                    fontSize: '5rem', // Equivalente a text-6xl
                }}
            >
                Sheyla
            </Typography>

            {/* Separador con "y" */}
            <Box className="flex items-center gap-4">
                <Box
                    sx={{
                        width: '4rem',
                        height: '1px',
                        backgroundColor: 'black'
                    }}
                />
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: 'var(--font-allura)',
                        fontSize: '4rem', // Equivalente a text-4xl
                    }}
                >
                    y
                </Typography>
                <Box
                    sx={{
                        width: '4rem',
                        height: '1px',
                        backgroundColor: 'black'
                    }}
                />
            </Box>

            {/* Nombre 2 */}
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'var(--font-allura)',
                    fontSize: '5rem', // Equivalente a text-6xl
                }}
            >
                James
            </Typography>
        </Box>
    );
};

export default CoupleNames;