'use client';
import React, { useState } from 'react';
import { Card, Chip, Typography, Divider, List, ListItem, ListItemDecorator, CardActions, Button } from '@mui/joy';
import { Check, KeyboardArrowRight } from '@mui/icons-material';
import PassengerForm from '@/app/bus-tickets/components/PassengerForm';

interface BusData {
  id: string;
  title: string;
  features: string[];
  pricing: number;
  tier: string;
}

interface BusCardProps {
  bus: BusData;
}

const BusCard: React.FC<BusCardProps> = ({ bus }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Card size="lg" variant="outlined">
        <Chip size="sm" variant="outlined" color="neutral">
          {bus?.tier}
        </Chip>
        <Typography level="h2">{bus.title}</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }} orientation="horizontal">
          {bus.features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              {feature}
            </ListItem>
          ))}
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }}>
            {bus.pricing}₹
            <Typography fontSize="sm" textColor="text.tertiary">
              / Per day
            </Typography>
          </Typography>

          <Button endDecorator={<KeyboardArrowRight />} onClick={() => setIsDrawerOpen(true)}>
            Book now
          </Button>
        </CardActions>
      </Card>
      <PassengerForm isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />{' '}
    </>
  );
};
export default BusCard;
