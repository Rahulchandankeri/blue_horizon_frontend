import React, { useEffect, useState } from 'react';
import BusCard from '@/components/features/BusCard';
import Main from '@/components/layouts/Main';
import tripServices from '@/services/tripServices';
import { Grid } from '@mui/joy';

interface Trip {
  id: number;
  name: string;
  // Add other trip fields here
}
const fetchTrips = async (searchParams: URLSearchParams): Promise<Trip[]> => {
  try {
    const payload = {
      source: searchParams.get('source'),
      destination: searchParams.get('destination'),
      journeyDate: '22/06/2024',
    };
    const response = await tripServices.getAvailableTrips(payload);
    return response?.availableTrips || [];
  } catch (error) {
    console.error('Error fetching trips:', error);
    return [];
  }
};

const TripsPage = async ({ searchParams }: { searchParams: URLSearchParams }) => {
  const trips = await fetchTrips(searchParams);

  return (
    <Main>
      {/* <BusInfoCard busNumber="22B" route="Downtown to Uptown" departureTime="08:30 AM" arrivalTime="09:15 AM" status="On Time" /> */}
      <Grid container spacing={2}>
        {trips?.map((bus: any, index: number) => {
          return (
            <Grid xs={12} key={index}>
              <BusCard bus={bus} />
            </Grid>
          );
        })}
      </Grid>
      <script async src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </Main>
  );
};
export default TripsPage;
