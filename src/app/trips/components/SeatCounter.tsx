'use client';
import React from 'react';
import { Button, Typography } from '@mui/joy';

interface SeatCounterProps {
  counter: number;
  setCounter: (value: any) => void;
}
const SeatCounter: React.FC<SeatCounterProps> = ({ counter, setCounter }) => {
  const handleIncrement = () => {
    setCounter((prevCount: number) => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setCounter((prevCount: number) => Math.max(prevCount - 1, 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button size="sm" variant="outlined" color="primary" onClick={handleDecrement}>
        -
      </Button>
      <Typography sx={{ px: 2 }}>{counter}</Typography>
      <Button size="sm" variant="outlined" color="primary" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default SeatCounter;
