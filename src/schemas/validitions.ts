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
