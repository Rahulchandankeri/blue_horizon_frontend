import SearchBus from '@/components/features/SearchBus';
import Main from '@/components/layouts/Main';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/joy';
import styles from './page.module.scss';
import Section from '@/components/layouts/Section';
import bg from '../../public/assets/images/download.webp';
import Image from 'next/image';
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
      <div className="mb-4"></div>
      <Main>
        <Section>
          <Box position={'relative'}>
            <Box className={styles.containerBusSearchWrapper}>
              <div>
                <Image src={bg} alt="" />
              </div>
            </Box>
            <Box className={styles.busSearchWrapper}>
              <SearchBus />
            </Box>
          </Box>
        </Section>
        <Section>
          <Box>
            <Grid container spacing={2} alignItems={'middle'}>
              <Grid xs={12}>
                <Typography level="h4">Top Destination:</Typography>
              </Grid>
              {topBusTravelDestinationsInIndia?.map((item) => (
                <Grid key={item?.uid} xs={6} xl={2} alignItems={'middle'}>
                  <Card orientation="horizontal" size="sm">
                    <CardContent>
                      <Typography level="body-xs">{item?.city}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Section>
      </Main>
    </div>
  );
}
