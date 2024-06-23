'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Typography,
  Card,
  CardContent,
  Divider,
  DialogTitle,
  Snackbar,
  Grid,
  FormHelperText,
  Alert,
  AspectRatio,
  IconButton,
  Modal,
  ModalDialog,
  ModalClose,
  DialogContent,
  CircularProgress,
} from '@mui/joy';
import SeatCounter from './SeatCounter';
import { useFormik } from 'formik';
import { userBusBookingSchema } from '@/schemas/validitions';
import bookingService, { RazorpayPaymentResponse } from '@/services/bookingServices';
import { Check, CheckCircle, Close } from '@mui/icons-material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PassengerFormProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  busDetails?: any;
}
interface InitiateBooking {
  name: String;
  email_id: String;
}

const PassengerForm: React.FC<PassengerFormProps> = ({ isDrawerOpen, setIsDrawerOpen, busDetails }) => {
  const [seatCount, setSeatCount] = useState(1);
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({ isVisible: false, message: '' });
  // Initial values for the form fields
  const initialValues = {
    name: '',
    gender: 'male', // Default to male, for example
    age: 0, // Default to 20 years, for example
    email_id: '',
    phone_number: '',
    seatCount: 0, // Default to 0 selected seats
  };

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
    initialValues,
    validationSchema: userBusBookingSchema,
    onSubmit: (values, action) => {
      handleBookingIntiation(values);
      // action.resetForm();
    },
  });

  const handleBookingIntiation = async (values: any) => {
    const journeySearchDetails = {
      source: searchParams.get('source'),
      destination: searchParams.get('destination'),
      journeyDate: '22/06/2024',
    };
    try {
      const payload = {
        name: values.name,
        email_id: values?.email_id,
        ...journeySearchDetails,
        ...busDetails,
      };
      const response = await bookingService.initiateBooking(payload);
      if (response.booking_id) {
        handleBusBooking({ ...values, booking_id: response.booking_id });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleBusBooking = async (values: any) => {
    try {
      const payload = {
        name: values?.name,
        receipt: `receipt_order_${values?.booking_id}`,
        amount: seatCount * busDetails?.price,
        booking_id: values?.booking_id,
      };
      const response = await bookingService.createBooking(payload);

      openRazorpay({ ...response, ...values });
    } catch (error) {
      console.log(error);
    } finally {
      setIsDrawerOpen(false);
    }
  };

  const onPaymentSuccess = async (paymentDetails: RazorpayPaymentResponse) => {
    setIsLoading(true);
    try {
      const response = await bookingService.bookingSuccess(paymentDetails);
      setPaymentStatus({
        isVisible: true,
        message: 'Payment successful!',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openRazorpay = (orderDetails: any) => {
    const options = {
      key: process.env.RAZOR_PAY_KEY,
      amount: orderDetails?.amount,
      currency: orderDetails?.currency || 'INR',
      name: 'Blue Horizon',
      description: 'Booking Payment',
      order_id: orderDetails?.orderId,

      handler: function (response: RazorpayPaymentResponse) {
        console.log(response, `response`);

        onPaymentSuccess({ ...response, amount: orderDetails?.amount });
      },
      notes: {
        booking_id: orderDetails?.booking_id,
      },
      prefill: {
        name: orderDetails?.name,
        email: orderDetails?.email_id,
        contact: orderDetails?.phone_number,
      },
      theme: {
        color: '#3399cc',
      },
    };
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box sx={{ width: 400, margin: '0 auto', padding: '18px 16px' }} role="presentation">
          <form onSubmit={handleSubmit}>
            <DialogTitle>Passenger Information</DialogTitle>
            <Card
              sx={{
                margin: '16px auto',
                padding: 2,
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <FormControl error={errors.name && touched.name ? true : false}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoFocus={true}
                    />
                    {errors.name && touched.name ? <FormHelperText>{errors.name}</FormHelperText> : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                      name="gender"
                      defaultValue="male"
                      orientation="horizontal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <Radio value="male" label="Male" />
                      <Radio value="female" label="Female" />
                    </RadioGroup>{' '}
                    {errors.gender && touched.gender && <div>{errors.gender}</div>}
                  </FormControl>
                  <FormControl error={errors.age && touched.age ? true : false}>
                    <FormLabel>Age </FormLabel>
                    <Input name="age" type="number" onChange={handleChange} onBlur={handleBlur}></Input>{' '}
                    {errors.age && touched.age ? <FormHelperText>{errors.age}</FormHelperText> : null}
                  </FormControl>{' '}
                  <FormControl>
                    <Grid container spacing={2} alignItems={'flex-end'}>
                      <Grid>
                        <FormLabel>My Seats</FormLabel>
                        <SeatCounter counter={seatCount} setCounter={setSeatCount} />{' '}
                      </Grid>
                      <Grid>
                        <Typography fontWeight={600}>{seatCount * busDetails?.price}₹</Typography>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Stack>
              </CardContent>
            </Card>
            <Divider
              sx={{
                margin: '8px 0',
              }}
            />{' '}
            <DialogTitle>Contact Information</DialogTitle>
            <Card
              sx={{
                margin: '16px auto',
                padding: 2,
              }}
            >
              {/* <CardHeader title="Contact Details" /> */}
              <CardContent></CardContent>
              <Stack spacing={2}>
                <FormControl error={errors.email_id && touched.email_id ? true : false}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email_id"
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email_id && touched.email_id ? true : false}
                  />
                  {errors.email_id && touched.email_id ? <FormHelperText>{errors.email_id}</FormHelperText> : null}
                </FormControl>
                <FormControl error={errors.phone_number && touched.phone_number ? true : false}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    name="phone_number"
                    type="tel"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    error={errors.phone_number && touched.phone_number ? true : false}
                    onBlur={handleBlur}
                  />{' '}
                  {errors.phone_number && touched.phone_number ? <FormHelperText>{errors.phone_number}</FormHelperText> : null}
                </FormControl>
              </Stack>
            </Card>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                p: 1.5,
                pb: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack gap={2}>
                <Typography level="body-xs">By clicking on proceed, I agree that I have read and understood the TnCs.</Typography>
                <Button variant="solid" color="primary" type="submit">
                  Book Now
                </Button>
              </Stack>{' '}
            </Box>
          </form>
        </Box>
      </Drawer>{' '}
      <Modal open={paymentStatus.isVisible} onClose={() => setPaymentStatus((prev) => ({ ...prev, isVisible: false }))}>
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'white', // Set background color to white
              borderRadius: 8,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
              border: 0,
              p: 4,
              width: '300px',
              margin: 'auto',
              mt: '20vh',
            }}
          >
            <CheckCircle sx={{ fontSize: 60, color: 'green' }} />
            {/* <CheckCircleOutlineIcon/> */}
            <Typography level="h4" sx={{ mt: 2 }}>
              Booking Successful
            </Typography>
            <Typography level="body-sm" sx={{ mt: 1, textAlign: 'center' }}>
              Your booking has been successfully completed. Thank you for using our service!
            </Typography>
            <Stack direction={'row'} gap={2}>
              {' '}
              <Button
                onClick={() => setPaymentStatus((prev) => ({ ...prev, isVisible: false }))}
                sx={{ mt: 3 }}
                variant="solid"
                color="danger"
              >
                Close
              </Button>{' '}
              <Link href="/bookings">
                <Button
                  onClick={() => setPaymentStatus((prev) => ({ ...prev, isVisible: false }))}
                  sx={{ mt: 3 }}
                  variant="solid"
                  color="success"
                >
                  View
                </Button>
              </Link>
            </Stack>
          </Box>{' '}
        </>
      </Modal>{' '}
      <script async src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </>
  );
};

export default PassengerForm;
