import Main from '@/components/layouts/Main';
import { Grid } from '@mui/joy';
import { Suspense } from 'react';
import AvailableTrips from './components/AvailableTrips';
import Section from '@/components/layouts/Section';

const TripsPage = () => {
  return (
    <Main>
      <Suspense>
        <Section>

        <Grid container spacing={2}>
          <AvailableTrips />
        </Grid>
        </Section>
      </Suspense>
    </Main>
  );
};

export default TripsPage;
