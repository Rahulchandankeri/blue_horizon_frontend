'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Stack,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  CardActions,
} from '@mui/joy';
import { Check, KeyboardArrowRight } from '@mui/icons-material';

interface BusInfoCardProps {
  busNumber: string;
  route: string;
  departureTime: string;
  arrivalTime: string;
  status: 'On Time' | 'Delayed';
}
const BusInfoCard: React.FC<BusInfoCardProps> = ({ busNumber, route, departureTime, arrivalTime, status }) => {
  const rows = 5;
  const columns = 4; // Example: 4 columns per row
  const [selectedSeats, setSelectedSeats] = useState<boolean[][]>(
    Array(rows)
      .fill(false)
      .map(() => Array(columns).fill(false))
  );
  const [showSeats, setShowSeats] = useState(false);
  const handleSeatClick = (rowIndex: number, colIndex: number) => {
    const newSelectedSeats = [...selectedSeats];
    newSelectedSeats[rowIndex][colIndex] = !newSelectedSeats[rowIndex][colIndex];
    setSelectedSeats(newSelectedSeats);
  };

  const onShowSeats = () => {
    setShowSeats((prev) => !prev);
  };
  return (
    <Box sx={{ width: '90%', margin: 'auto' }}>
      <Card variant="outlined" sx={{ boxShadow: 'lg' }}>
        <CardContent>
          <Grid container alignItems={'center'}>
            <Grid xs={3}>
              <Typography level="body-xs">Bus {busNumber}</Typography>
              <Typography level="body-xs"> NON A/C Sleeper (2+1)</Typography>
            </Grid>

            <Grid xs={3}>
              <Stack spacing={1} direction="row" alignItems="baseline">
                <Typography level="title-sm">Departure: </Typography>
                <Typography level="body-xs">{departureTime}</Typography>{' '}
              </Stack>
            </Grid>
            <Grid xs={3}>
              <Stack spacing={1} direction="row" alignItems="baseline">
                <Typography level="title-sm">Arrival: </Typography>
                <Typography level="body-xs">{arrivalTime}</Typography>
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Button onClick={onShowSeats}>Select Seats</Button>
            </Grid>
          </Grid>
        </CardContent>{' '}
      </Card>{' '}
      {showSeats ? (
        <Card>
          <>
            <Grid container spacing={1}>
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <Grid container xs={12} key={rowIndex} spacing={1} justifyContent="center">
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <Grid key={colIndex}>
                      <Button
                        type={selectedSeats[rowIndex][colIndex] ? 'contained' : 'outlined'}
                        color={selectedSeats[rowIndex][colIndex] ? 'primary' : 'neutral'}
                        onClick={() => handleSeatClick(rowIndex, colIndex)}
                        sx={{
                          minWidth: 10,
                          minHeight: 10,
                        }}
                      >
                        {' '}
                        {rowIndex + 1} {String.fromCharCode(65 + colIndex)}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>{' '}
          </>
        </Card>
      ) : null}{' '}
    </Box>
  );
};

export default BusInfoCard;
