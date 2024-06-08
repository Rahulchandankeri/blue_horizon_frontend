'use client';

import { Autocomplete, Button, Grid, Input, TextField, Typography } from '@mui/joy';

import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';
const SearchBus = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleFromSelect = (e: any, val: any) => {
    setSelectedValue(val.value);
  };
  const handleSearchBuses = () => {
    router.push('/bus-tickets');
  };
  return (
    <>
      {' '}
      <Grid container rowSpacing={4} columnSpacing={{ md: 4 }} alignItems={'center'}>
        <Grid lg={12} textAlign={'center'}>
          <Typography level="h2">Book Bus Tickets</Typography>
        </Grid>
        <Grid lg={3}>
          <Autocomplete size="lg" placeholder="From" options={options} onChange={handleFromSelect} />
        </Grid>
        <Grid lg={3}>
          <Autocomplete
            size="lg"
            placeholder="To"
            options={options}
            filterOptions={(options: any) => options.filter((option: any) => option.value !== selectedValue)}
          />
        </Grid>
        <Grid lg={3}>
          {' '}
          <>
            <Input type="date" size="lg">
              {' '}
            </Input>
          </>
        </Grid>
        <Grid>
          <Button size="lg" onClick={handleSearchBuses}>
            Search Buses
          </Button>
        </Grid>{' '}
      </Grid>
    </>
  );
};

export default SearchBus;
const options = [
  { label: 'Mumbai', value: 'mumbai' },
  { label: 'Delhi', value: 'delhi' },
  { label: 'Bengaluru', value: 'bengaluru' },
  { label: 'Hyderabad', value: 'hyderabad' },
  { label: 'Ahmedabad', value: 'ahmedabad' },
  { label: 'Chennai', value: 'chennai' },
  { label: 'Kolkata', value: 'kolkata' },
  { label: 'Pune', value: 'pune' },
  { label: 'Jaipur', value: 'jaipur' },
  { label: 'Surat', value: 'surat' },
  { label: 'Lucknow', value: 'lucknow' },
  { label: 'Kanpur', value: 'kanpur' },
  { label: 'Nagpur', value: 'nagpur' },
  { label: 'Patna', value: 'patna' },
  { label: 'Indore', value: 'indore' },
  { label: 'Thane', value: 'thane' },
  { label: 'Bhopal', value: 'bhopal' },
  { label: 'Visakhapatnam', value: 'visakhapatnam' },
  { label: 'Vadodara', value: 'vadodara' },
  { label: 'Firozabad', value: 'firozabad' },
];
