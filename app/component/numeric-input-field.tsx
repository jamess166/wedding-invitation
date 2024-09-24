import React, { useState, useEffect} from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface NumericInputFieldProps {
    label: string;
    initialValue?: number;
    min?: number;
    max?: number;
    onChange?: (event: { target: { name: string; value: number | string } }) => void;
    name: string;
  }

  const NumericInputField: React.FC<NumericInputFieldProps> = ({ 
    label, 
    initialValue = 0, 
    min = 1, 
    max = 3, 
    onChange,
    name 
  }) => {
    const [value, setValue] = useState<number>(Math.max(min, Math.min(max, initialValue)));
  
    useEffect(() => {
      // Asegurarse de que el valor inicial esté dentro de los límites
      setValue(Math.max(min, Math.min(max, initialValue)));
    }, [min, max, initialValue]);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = event.target.value === '' ? min : parseInt(event.target.value, 10);
      newValue = Math.max(min, Math.min(max, newValue));
      setValue(newValue);
      onChange && onChange({ target: { name, value: newValue } });
    };
  
    const handleIncrement = () => {
      const newValue = Math.min(value + 1, max);
      setValue(newValue);
      onChange && onChange({ target: { name, value: newValue } });
    };
  
    const handleDecrement = () => {
      const newValue = Math.max(value - 1, min);
      setValue(newValue);
      onChange && onChange({ target: { name, value: newValue } });
    };
  
    const handleBlur = () => {
      const newValue = Math.max(min, Math.min(max, value));
      setValue(newValue);
      onChange && onChange({ target: { name, value: newValue } });
    };

//   const NumericInputField: React.FC<NumericInputFieldProps> = ({ 
//     label, 
//     initialValue = 0, 
//     min = 1, 
//     max = 3, 
//     onChange,
//     name 
//   }) => {
//     const [value, setValue] = useState(initialValue);
  
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const newValue = event.target.value === '' ? min : parseInt(event.target.value, 10);
//       if (!isNaN(newValue) && newValue >= min && newValue <= max) {
//         setValue(newValue);
//         onChange && onChange({ target: { name, value: newValue } });
//       }
//     };
  
//     const handleIncrement = () => {
//       const newValue = Math.min(value + 1, max);
//       setValue(newValue);
//       onChange && onChange({ target: { name, value: newValue } });
//     };
  
//     const handleDecrement = () => {
//       const newValue = Math.max(value - 1, min);
//       setValue(newValue);
//       onChange && onChange({ target: { name, value: newValue } });
//     };
  
//     const handleBlur = () => {
//       if (value === 0) {
//         setValue(min);
//         onChange && onChange({ target: { name, value: min } });
//       }
//     };

// const NumericInputField: React.FC<NumericInputFieldProps> = ({ label, initialValue = 0, min = 0, max = Infinity, onChange }) => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = event.target.value === '' ? min : parseInt(event.target.value, 10);
//     if (!isNaN(newValue) && newValue >= min && newValue <= max) {
//         setValue(newValue);
//         onChange && onChange(newValue);
//     }
//   };

//   const handleIncrement = () => {
//     const newValue = Math.min(value + 1, max);
//     setValue(newValue);
//     onChange && onChange(newValue);
//   };

//   const handleDecrement = () => {
//     const newValue = Math.max(value - 1, min);
//     setValue(newValue);
//     onChange && onChange(newValue);
//   };

//   const handleBlur = () => {
//     if (value === 1) {
//       setValue(min);
//       onChange && onChange(min);
//     }
//   };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleDecrement} disabled={value <= min}>
              <RemoveIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleIncrement} disabled={value >= max}>
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      inputProps={{
        min: min,
        max: max,
        style: { textAlign: 'center' }
      }}
    />
  );
};

export default NumericInputField;