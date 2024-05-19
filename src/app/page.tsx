import SearchBus from '@/components/features/SearchBus';
import Main from '@/components/layouts/Main';
import NavBar from '@/components/layouts/NavBar';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/joy';
import styles from './page.module.scss';
import { CardMedia } from '@mui/material';
import Section from '@/components/layouts/Section';
import Footer from '@/components/layouts/Footer';

const topBusTravelDestinationsInIndia = [
  {
    uid: '1',
    city: 'Jaipur',
    state: 'RJ',
    rating: 4.7,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '2',
    city: 'Goa',
    state: 'GA',
    rating: 4.8,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '3',
    city: 'Mumbai',
    state: 'MH',
    rating: 4.6,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '4',
    city: 'Delhi',
    state: 'DL',
    rating: 4.5,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '5',
    city: 'Kolkata',
    state: 'WB',
    rating: 4.4,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '6',
    city: 'Bengaluru',
    state: 'KA',
    rating: 4.6,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '7',
    city: 'Chennai',
    state: 'TN',
    rating: 4.5,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '8',
    city: 'Hyderabad',
    state: 'TS',
    rating: 4.6,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '9',
    city: 'Pune',
    state: 'MH',
    rating: 4.4,
    image: 'https://via.placeholder.com/200',
  },
  {
    uid: '10',
    city: 'Manali',
    state: 'HP',
    rating: 4.7,
    image: 'https://via.placeholder.com/200',
  },
];

export default function Home() {
  return (
    <div className={styles.mainWrap}>
      <div className="mb-4">
        <NavBar />
      </div>
      <Main>
        <Box position={'relative'}>
          <Box className={styles.containerBusSearchWrapper}>
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/hero-banner.webp" alt="" />{' '}
          </Box>
          <Box className={styles.busSearchWrapper}>
            <SearchBus />
          </Box>{' '}
        </Box>
        <Section>
          <Box marginTop={15}>
            <Grid container spacing={2} alignItems={'middle'}>
              <Grid xs={12}>
                <Typography level="h4">Top Destination:</Typography>
              </Grid>
              {topBusTravelDestinationsInIndia?.map((item) => (
                <Grid key={item?.uid} xs={2} xl={2} alignItems={'middle'}>
                  <Card orientation="horizontal">
                    {/* <CardMedia component="img"></CardMedia> */}
                    <CardContent>
                      {item?.city}, {item?.state}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Section>
        <Section>
          <Footer />
        </Section>
      </Main>
    </div>
  );
}
