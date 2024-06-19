import BusInfoCard from '@/components/features/BusBookingCard';
import BusCard from '@/components/features/BusCard';
import Main from '@/components/layouts/Main';
import { Grid } from '@mui/joy';

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
  return (
    <Main>
      {/* <BusInfoCard busNumber="22B" route="Downtown to Uptown" departureTime="08:30 AM" arrivalTime="09:15 AM" status="On Time" /> */}
      <Grid container spacing={2}>
        {data?.buses?.map((bus) => {
          return (
            <Grid xs={12} key={bus?.id}>
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
