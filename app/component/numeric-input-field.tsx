import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface CounterProps {
  min?: number;
  max?: number;
  onChange: (value: number) => void; // Prop para manejar el cambio
}

const Counter: React.FC<CounterProps> = ({ min = 0, max = 3, onChange }) => {
  const [value, setValue] = useState<number>(min);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <Box className="flex items-center space-x-2" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* Botón de restar */}
      <IconButton
        onClick={handleDecrement}
        disabled={value <= min}
        className="bg-gray-200 hover:bg-gray-300"
      >
        <RemoveIcon />
      </IconButton>

      {/* Campo de texto para mostrar el valor */}
      <TextField        
        value={value}
        inputProps={{ readOnly: true }}
        className="w-12 text-center"
        variant="outlined"
      />

      {/* Botón de sumar */}
      <IconButton
        onClick={handleIncrement}
        disabled={value >= max}
        className="bg-gray-200 hover:bg-gray-300"
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default Counter;
