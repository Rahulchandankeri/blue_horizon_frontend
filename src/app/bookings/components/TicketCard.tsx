import React from 'react';
import { Card, Typography, CardContent, Button, CardActions, Divider, Stack } from '@mui/joy';
import capitilizeFirstLetter from '@/utils/capitilizeFirstLetter';

interface TicketCardProps {
  details: any;
}
const TicketCard: React.FC<TicketCardProps> = ({ details }) => {
  return (
    <>
      {' '}
      <Card size="md">
        {/* <CardHeader title="Your Bus Ticket" subheader="Bus #1234 - New York to Boston" /> */}
        <CardContent>
          <Stack direction={'row'} gap={2}>
            <Typography level="body-xs" mt={2}>
              <Typography fontWeight={600}> Passenger: </Typography>
              {details?.name}
            </Typography>
          </Stack>
          {details?.no_of_seats > 1 ? (
            <Typography level="body-xs">
              <Typography fontWeight={600}>Passengers: </Typography> {details?.no_of_seats}
            </Typography>
          ) : null}
          <Stack gap={1} direction={'row'}>
            <Typography level="body-xs">
              <Typography fontWeight={600}>Departure: </Typography>
              {details?.departure}
            </Typography>
            <Typography level="body-xs">
              <Typography fontWeight={600}>Arrival: </Typography> {details?.arrival}
            </Typography>
          </Stack>

          <Stack direction={'row'} gap={2}>
            <Typography level="body-sm">
              {capitilizeFirstLetter(details?.source)}-{capitilizeFirstLetter(details?.destination)}
            </Typography>
          </Stack>

          <Divider sx={{ marginY: 2 }} />
          <Typography
            level="body-sm"
            sx={{
              fontWeight: 600,
            }}
          >
            {details?.price} ₹
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="sm">View Ticket</Button>
          <Button size="sm">Cancel</Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default TicketCard;
