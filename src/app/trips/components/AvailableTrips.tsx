'use client';
import BusCard from '@/components/features/BusCard';

import tripServices from '@/services/tripServices';
import { Grid, Typography } from '@mui/joy';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import bg from '../../../../public/assets/images/not-found.png';
import Image from 'next/image';
import styles from './AvailableTrips.module.scss';
import Section from '@/components/layouts/Section';
import Sidebar from '@/app/admin/components/SideBar';

const AvailableTrips = () => {
  const searchParams = useSearchParams();
  const [trips, setTrips] = useState<any>(null);

  const getTrips = async () => {
    try {
      const payload = {
        source: searchParams.get('source'),
        destination: searchParams.get('destination'),
        journeyDate: searchParams.get('journeyDate'),
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
      {trips?.availableTrips?.length ? (
        trips?.availableTrips?.map((bus: any, index: number) => {
          return (
            <Grid xs={12} key={index}>
              <BusCard bus={bus} />
            </Grid>
          );
        })
      ) : (
        <Grid xs={12}>
          <div className={styles?.bgWrapper}>
            <Typography level="h4" color="primary">
              No Routes Found!
            </Typography>

            <Image src={bg} alt="bg" height={400} />
          </div>
        </Grid>
      )}
    </>
  );
};

export default AvailableTrips;
