import React from 'react';
import { TextField } from '@mui/material';

interface CustomTextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean; // Añadimos la prop disabled como opcional
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  fullWidth = true,
  disabled = false 
}) => {
  return (
    <TextField
      label={label}
      variant="standard" // Usa 'standard' para solo una línea inferior
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      margin="normal"
      required={required}
      disabled={disabled}
      InputLabelProps={{
        shrink: true, // Mantiene el label siempre en la parte superior
      }}
      sx={{
        "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Línea inferior gris
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "darkgray",
        }, // Hover gris oscuro
        "& .MuiInput-underline:after": { borderBottomColor: "#1a1a1a" }, // Línea cuando está enfocado
        "& .MuiInputLabel-root": { 
          color: "gray", // Color del label en gris
          width: "100%", // Asegura que ocupe todo el ancho del TextField
          textAlign: "center", // Centra el texto del label
          left: "0", // Alinea al inicio
          transform: "none", // Elimina la necesidad de traducir
          marginBottom: "8px", // Ajusta la separación entre el label y el texto
        },
        "& .MuiInputLabel-root.Mui-focused": { 
          color: "#1a1a1a", // Color del label cuando está enfocado
        },
        "& .MuiInputBase-input": {
          textAlign: "center", // Centra el texto dentro del input
          paddingTop: "16px", // Ajusta la separación superior del texto
        },
      }}
    />
  );
};

export default CustomTextField;
