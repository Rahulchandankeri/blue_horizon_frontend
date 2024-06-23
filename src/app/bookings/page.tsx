'use client';
import React, { useEffect, useState } from 'react';
import TicketCard from './components/TicketCard';
import bookingService from '@/services/bookingServices';
import { Grid } from '@mui/joy';
import Main from '@/components/layouts/Main';

const Bookings = () => {
  const [bookedTickets, setBookedTickets] = useState<any>(null);
  const getBookings = async () => {
    try {
      const response = await bookingService.getBookings();
      setBookedTickets(response);
    } catch (error) {}
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <Main>
      <Grid container spacing={2}>
        {bookedTickets?.bookingDetails?.map((details: any) => (
          <Grid xs={3} key={details?.booking_id}>
            <TicketCard details={details} />
          </Grid>
        ))}
      </Grid>
    </Main>
  );
};

export default Bookings;
