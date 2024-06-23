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
      <Card>
        {/* <CardHeader title="Your Bus Ticket" subheader="Bus #1234 - New York to Boston" /> */}
        <CardContent>
          <Stack direction={'row'} gap={2}>
            <Typography level="body-sm" mt={2}>
              Passenger:
              {details?.name}
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Typography level="body-xs">Departure: 04/20/2023, 8:00 AM</Typography>
            <Typography level="body-xs">Arrival: 04/20/2023, 11:00 AM</Typography>
          </Stack>
          {/* <Typography level="body-xs">Seat:</Typography> <Typography level="body-md">23B</Typography> */}
          <Stack direction={'row'} gap={2}>
            <Typography level="body-sm" mt={2}>
              {capitilizeFirstLetter(details?.source)}
            </Typography>{' '}
            <Typography level="body-sm" mt={2}>
              {capitilizeFirstLetter(details?.destination)}
            </Typography>
          </Stack>

          <Divider sx={{ marginY: 2 }} />
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
