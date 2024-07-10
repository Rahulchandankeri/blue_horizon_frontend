'use client';
import Section from '@/components/layouts/Section';
import { createRouteSchema } from '@/schemas/validitions';
import { Box, Button, Card, FormControl, FormHelperText, FormLabel, Grid, Input, Stack } from '@mui/joy';
import { useFormik } from 'formik';

const CreateRoute = () => {
  const formik = useFormik({
    initialValues: {
      source: '',
      destination: '',
      departure: '',
      arrival: '',
      price: '',
    },
    validationSchema: createRouteSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      // handleBookingIntiation(values);
    },
  });
  return (
    <Section>
      <Box component="form" flexDirection={'column'} onSubmit={formik.handleSubmit} sx={{ display: 'flex', margin: 'auto' }}>
        <>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <FormControl error={formik.errors.source && formik.touched.source ? true : false}>
                <FormLabel>Source</FormLabel>
                <Input
                  name="source"
                  id="source"
                  placeholder="Enter source"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.source}
                />
                {formik.errors.source && formik.touched.source && <FormHelperText>{formik.errors.source}</FormHelperText>}
              </FormControl>{' '}
            </Grid>{' '}
            <Grid xs={4}>
              <FormControl error={formik.errors.destination && formik.touched.destination ? true : false}>
                <FormLabel>Destination</FormLabel>
                <Input
                  name="destination"
                  id="destination"
                  placeholder="Enter destination"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.destination}
                />
                {formik.errors.destination && formik.touched.destination && (
                  <FormHelperText>{formik.errors.destination}</FormHelperText>
                )}
              </FormControl>{' '}
            </Grid>{' '}
            <Grid xs={4}>
              <FormControl error={formik.errors.departure && formik.touched.departure ? true : false}>
                <FormLabel>Departure</FormLabel>
                <Input
                  name="departure"
                  id="departure"
                  placeholder="Enter departure time (HH:mm)"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.departure}
                />
                {formik.errors.departure && formik.touched.departure && (
                  <FormHelperText>{formik.errors.departure}</FormHelperText>
                )}
              </FormControl>{' '}
            </Grid>{' '}
            <Grid xs={4}>
              <FormControl error={formik.errors.arrival && formik.touched.arrival ? true : false}>
                <FormLabel>Arrival</FormLabel>
                <Input
                  name="arrival"
                  id="arrival"
                  placeholder="Enter arrival time (HH:mm)"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.arrival}
                />
                {formik.errors.arrival && formik.touched.arrival && <FormHelperText>{formik.errors.arrival}</FormHelperText>}
              </FormControl>{' '}
            </Grid>{' '}
            <Grid xs={4}>
              <FormControl error={formik.errors.price && formik.touched.price ? true : false}>
                <FormLabel>Price</FormLabel>
                <Input
                  name="price"
                  id="price"
                  placeholder="Enter price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
                {formik.errors.price && formik.touched.price && <FormHelperText>{formik.errors.price}</FormHelperText>}
              </FormControl>{' '}
            </Grid>
            <Grid xs={12}>
              <Button type="submit" sx={{ marginTop: '20px' }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </>
      </Box>
    </Section>
  );
};

export default CreateRoute;
