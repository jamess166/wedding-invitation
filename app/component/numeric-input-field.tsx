import React, { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CounterProps {
  min?: number;
  max?: number;
  onChange: (value: number) => void; // Prop para manejar el cambio
  disabled?: boolean;
}

const Counter: React.FC<CounterProps> = ({ min = 1, max = 3, onChange, disabled = false }) => {
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
    <Box
      className="flex items-center space-x-2"
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
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
        variant="standard"
        className="w-16"
        inputProps={{
          readOnly: true, // El campo es de solo lectura
          style: { textAlign: "center" }, // Aplica el centrado directamente al campo de entrada
        }}
        sx={{
          "& .MuiInputBase-root": {
            textAlign: "center", // Asegura que el contenedor también está centrado
          },
        }}
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
