import React from 'react';
import { Button } from '@mui/material';

interface MapButtonProps {
  url: string;
}

const MapButton: React.FC<MapButtonProps> = ({ url }) => (
  <Button
    variant="outlined"
    sx={{
      color: "var(--color-1)", 
      borderColor: "var(--color-1)", 
      fontFamily: "var(--font-opensans)",
      borderRadius: "50px",
      padding: "8px 16px",
      marginBottom: 6,
      "&:hover": {
        backgroundColor: "var(--color-4)",
        borderColor: "var(--color-2)", 
      },
    }}
    onClick={() => window.open(url, '_blank')} 
  >
    Cómo llegar
  </Button>
);

export default MapButton;
