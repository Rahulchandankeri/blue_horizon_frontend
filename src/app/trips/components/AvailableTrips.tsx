'use client';
import BusCard from '@/components/features/BusCard';
import tripServices from '@/services/tripServices';
import { Grid } from '@mui/joy';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AvailableTrips = () => {
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
    <>
      {' '}
      {trips?.availableTrips?.map((bus: any, index: number) => {
        return (
          <Grid xs={12} key={index}>
            <BusCard bus={bus} />
          </Grid>
        );
      })}
    </>
  );
};

export default AvailableTrips;
