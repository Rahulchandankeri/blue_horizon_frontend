import Main from '@/components/layouts/Main';
import { Grid } from '@mui/joy';
import { Suspense } from 'react';
import AvailableTrips from './components/AvailableTrips';

const TripsPage = () => {
  return (
    <Main>
      <Suspense>
        <Grid container spacing={2}>
          <AvailableTrips />
        </Grid>
      </Suspense>
      <script async src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </Main>
  );
};

export default TripsPage;
