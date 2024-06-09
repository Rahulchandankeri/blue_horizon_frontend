import {
  Button,
  DialogTitle,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Snackbar,
  Stack,
  Typography,
} from '@mui/joy';
import React, { useState } from 'react';
import authService from '../../services/authService';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, useFormik } from 'formik';
import { loginSchema } from '@/schemas/validitions';
import OTPField from '@/components/common/OTPField';
interface LoginProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}
interface LoginFormProps {
  email_id: string;
}
const Login: React.FC<LoginProps> = ({ isVisible, setIsVisible }) => {
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);
  const initialValues: LoginFormProps = { email_id: '' };
  const [preLoginDetails, setPreLoginDetails] = useState({
    status: '',
  });

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      handleLogin(values);

      action.resetForm();
    },
  });
  const handleLogin = async (values: LoginFormProps) => {
    try {
      const loginPayload = {
        ...values,
      };
      const res: any = await authService.login(loginPayload);

      if (res?.responseCode === 'OTP_SENT') {
        setIsSnackBarVisible(true);

        setPreLoginDetails({
          status: 'OTP_SENT',
        });
      }
    } catch (error) {
    } finally {
    }
  };

  return (
    <>
      <Modal open={isVisible} onClose={() => setIsVisible(false)}>
        {preLoginDetails.status !== 'OTP_SENT' ? (
          <>
            <ModalDialog sx={{ width: 400 }}>
              <DialogTitle>Sign Up / Log In!</DialogTitle>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl error={errors.email_id && touched.email_id ? true : false}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={values.email_id}
                      name="email_id"
                      id="email_id"
                      size="lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoFocus
                    />
                    {errors.email_id && touched.email_id ? <FormHelperText>{errors.email_id}</FormHelperText> : null}
                  </FormControl>
                  <Button size="lg" type="submit">
                    Send OTP
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </>
        ) : (
          <>
            <ModalDialog sx={{ width: 400 }}>
              <DialogTitle>Sign Up / Log In!</DialogTitle>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl error={errors.email_id && touched.email_id ? true : false}>
                    <FormLabel>OTP</FormLabel>
                    <OTPField />
                    {errors.email_id && touched.email_id ? <FormHelperText>{errors.email_id}</FormHelperText> : null}
                  </FormControl>
                  <Button size="lg" type="submit">
                    Send OTP
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </>
        )}
      </Modal>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isSnackBarVisible}
        onClose={() => setIsSnackBarVisible(false)}
        variant="outlined"
        color="success"
        autoHideDuration={4000}
        key={34}
      >
        Please check your email for OTP!
      </Snackbar>
    </>
  );
};

export default Login;
