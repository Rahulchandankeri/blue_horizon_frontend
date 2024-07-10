import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(20).required('Please enter your name'),
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(8).max(20).required('Please enter your password'),
  Confirm_Password: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), ''], 'Password must match'),
});
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginSchema = Yup.object({
  email_id: Yup.string().required('Please enter your email').matches(emailRegex, 'Invalid email id'),
});

export const userBusBookingSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be at most 20 characters')
    .required('Please enter your name'),

  gender: Yup.string().oneOf(['male', 'female'], 'Gender must be either male or female').required('Please select your gender'),

  age: Yup.number()
    .min(10, 'Age must be at least 10 years')
    .max(90, 'Age must be at most 90 years')
    .required('Please enter your age'),

  email_id: Yup.string().email('Please enter a valid email').required('Please enter your email'),

  phone_number: Yup.string()
    .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, 'Phone number must be a valid Indian phone number')
    .required('Please enter your phone number'),
});

export const searchBusSchema = Yup.object({
  fromCity: Yup.string()
    .required('Please select from city')
    .notOneOf([Yup.ref('toCity'), null], 'From city and To city cannot be the same'),
  toCity: Yup.string()
    .required('Please select to city')
    .notOneOf([Yup.ref('fromCity'), null], 'From city and To city cannot be the same'),
  dateOfJourney: Yup.string().required('Please select date of journey'),
});
export const createRouteSchema = Yup.object().shape({
  source: Yup.string().required('Source is required'),
  destination: Yup.string().required('Destination is required'),
  departure: Yup.string()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:mm)')
    .required('Departure time is required'),
  arrival: Yup.string()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:mm)')
    .required('Arrival time is required'),
  price: Yup.number().typeError('Price must be a number').positive('Price must be positive').required('Price is required'),
});
