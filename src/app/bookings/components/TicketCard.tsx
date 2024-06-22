import React from 'react';
import { Card, Typography, CardContent, Button, CardActions, Divider } from '@mui/joy';

interface TicketCardProps {
  passengerName: string;
}
const TicketCard: React.FC<TicketCardProps> = ({ passengerName }) => {
  return (
    <>
      {' '}
      <Card>
        {/* <CardHeader title="Your Bus Ticket" subheader="Bus #1234 - New York to Boston" /> */}
        <CardContent>
          <Typography level="body-sm">Departure:</Typography>
          <Typography level="body-sm">04/20/2023, 8:00 AM</Typography>

          <Typography level="body-sm" mt={2}>
            Arrival:
          </Typography>
          <Typography level="body-md">04/20/2023, 11:00 AM</Typography>

          <Typography level="body-md" mt={2}>
            Seat:
          </Typography>
          <Typography level="body-md">23B</Typography>

          <Typography level="body-md" mt={2}>
            Passenger:
          </Typography>
          <Typography level="body-md">{passengerName}</Typography>

          {/* <Divider level="middle" sx={{ marginY: 2 }} /> */}

          <Typography level="body-md">Price:</Typography>
          <Typography level="body-md">\$25.00</Typography>
        </CardContent>
        <CardActions>
          <Button size="sm">View Ticket</Button>
          <Button size="sm">Cancel</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default TicketCard;
