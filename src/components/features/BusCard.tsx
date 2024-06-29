'use client';
import React, { useState } from 'react';
import { Card, Chip, Typography, Divider, List, ListItem, ListItemDecorator, CardActions, Button, Stack, Grid } from '@mui/joy';
import { Check, KeyboardArrowRight } from '@mui/icons-material';
import PassengerForm from '@/app/trips/components/PassengerForm';
import capitilizeFirstLetter from '@/utils/capitilizeFirstLetter';
import StarIcon from '@mui/icons-material/Star';
import Login from '../common/Login';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
interface BusData {
  id: string;
  title: string;
  features: string[];
  price: number;
  tier: string;
  source: string;
  destination: string;
  departure: string;
  arrival: string;
}

interface BusCardProps {
  bus: BusData;
}

const BusCard: React.FC<BusCardProps> = ({ bus }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isUserLoggedIn = useSelector((state: RootState) => state.isUserLoggedIn);
  return (
    <>
      <Card size="lg" variant="outlined">
        <Grid container alignItems={'center'}>
          <Grid xs={3}>
            <Chip size="sm" variant="outlined" color="neutral">
              {capitilizeFirstLetter(bus?.source)} -{capitilizeFirstLetter(bus?.destination)}
            </Chip>
          </Grid>
          <Grid xs={5}>
            <Stack direction={'row'} gap={2}>
              <Typography level="body-xs">
                {' '}
                Departs At: <Typography sx={{ fontWeight: 600 }}>{bus?.departure}</Typography>
              </Typography>
              <Typography level="body-xs">
                {' '}
                Arrives At : <Typography sx={{ fontWeight: 600 }}>{bus?.arrival}</Typography>
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={4}>
            {' '}
            <Typography level="body-md">
              <Stack
                alignItems={'center'}
                justifyContent={'right'}
                direction={'row'}
                sx={{
                  textAlign: 'right',
                }}
              >
                {' '}
                4.4{' '}
                <StarIcon
                  sx={{
                    fontSize: 20,
                  }}
                />{' '}
              </Stack>
            </Typography>
          </Grid>
        </Grid>

        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }} orientation="horizontal">
          {/* {bus.features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              {feature}
            </ListItem>
          ))} */}
        </List>

        <Divider inset="none" sx={{ margin: 0 }} />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }}>
            {bus?.price}₹
            <Typography fontSize="sm" textColor="text.tertiary">
              / Per Ticket
            </Typography>
          </Typography>

          <Button endDecorator={<KeyboardArrowRight />} onClick={() => setIsDrawerOpen(true)}>
            Book now
          </Button>
        </CardActions>
      </Card>
      {isUserLoggedIn ? (
        <PassengerForm isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} busDetails={bus} />
      ) : (
        <Login isVisible={isDrawerOpen} setIsVisible={setIsDrawerOpen} />
      )}
    </>
  );
};
export default BusCard;
