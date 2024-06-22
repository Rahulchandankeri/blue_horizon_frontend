'use client';

import BusCard from '@/components/features/BusCard';
import Main from '@/components/layouts/Main';
import tripServices from '@/services/tripServices';
import { Grid } from '@mui/joy';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const data = {
  buses: [
    {
      id: 'bus123',
      tier: 'Platinum',
      title: 'Luxury Express',
      features: ['Charger', 'Blanket', 'WiFi', 'Reclining Seats', 'TV'],
      pricing: 17000, // pricing in INR
    },
    {
      id: 'bus125',
      title: 'Comfort Cruiser',
      tier: 'Gold',
      features: ['Charger', 'Blanket', 'WiFi', 'Reclining Seats'],
      pricing: 14000, // pricing in INR
    },
    {
      id: 'bus124',
      title: 'Economy Traveller',
      tier: 'Silver',
      features: ['Charger', 'WiFi'],
      pricing: 8000, // pricing in INR
    },
  ],
};

const BusTickets = () => {
  const searchParams = useSearchParams();

  const [trips, setTrips] = useState<any>(null);
  const getTrips = async () => {
    try {
      const payload = {
        source: searchParams.get('source'),
        destination: searchParams.get('destination'),
        journeyDate: '22/06/2024',
      };
      const response = await tripServices.getAvailableTrips(payload);
      setTrips(response);
    } catch (error) {}
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <Main>
      {/* <BusInfoCard busNumber="22B" route="Downtown to Uptown" departureTime="08:30 AM" arrivalTime="09:15 AM" status="On Time" /> */}
      <Grid container spacing={2}>
        {trips?.availableTrips?.map((bus: any, index: number) => {
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

export default BusTickets;
