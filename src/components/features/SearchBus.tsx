'use client';

import { Autocomplete, Button, FormControl, FormHelperText, Grid, Input, TextField, Typography } from '@mui/joy';

import React, { useState } from 'react';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { searchBusSchema } from '@/schemas/validitions';
const SearchBus = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const initialValues = {
    fromCity: '',
    toCity: '',
    dateOfJourney: '',
  };

  const { values, errors, handleBlur, handleChange, touched, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: searchBusSchema,
    onSubmit: (values, action) => {
      handleSearchBuses(values);
    },
  });

  const handleSearchBuses = (values: any) => {
    router.push('/bus-tickets');
  };
  return (
    <>
      {' '}
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={4} columnSpacing={{ md: 4 }} alignItems={'center'}>
          <Grid lg={12} textAlign={'center'}>
            <Typography level="h2">Book Bus Tickets</Typography>
          </Grid>
          <Grid lg={3}>
            <FormControl error={errors.fromCity && touched.fromCity ? true : false}>
              <Autocomplete
                size="lg"
                name="fromCity"
                id="fromCity"
                placeholder="From"
                options={options}
                onBlur={handleBlur}
                onChange={(event, value) => setFieldValue('fromCity', value?.value)}
              />{' '}
              {errors.fromCity && touched.fromCity ? <FormHelperText>{errors.fromCity}</FormHelperText> : null}
            </FormControl>
          </Grid>
          <Grid lg={3}>
            <FormControl error={errors.toCity && touched.toCity ? true : false}>
              <Autocomplete
                size="lg"
                placeholder="To"
                name="toCity"
                id="toCity"
                options={options}
                onBlur={handleBlur}
                onChange={(event, value) => setFieldValue('toCity', value?.value)}
              />
              {errors.toCity && touched.toCity ? <FormHelperText>{errors?.toCity}</FormHelperText> : null}
            </FormControl>
          </Grid>
          <Grid lg={3}>
            {' '}
            <FormControl error={errors.dateOfJourney && touched.dateOfJourney ? true : false}>
              <Input
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                name="dateOfJourney"
                id="dateOfJourney"
                size="lg"
              ></Input>{' '}
              {errors.dateOfJourney && touched.dateOfJourney ? <FormHelperText>{errors?.dateOfJourney}</FormHelperText> : null}
            </FormControl>
          </Grid>
          <Grid>
            <Button size="lg" type="submit">
              Search Buses
            </Button>
          </Grid>{' '}
        </Grid>
      </form>
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
