import apiClient from './apiClient';
interface User {
  email_id: string;
  otp?: any;
}

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  amount: string | number;
}
const initiateBooking = async (payload: any): Promise<any> => {
  const response = await apiClient.post(`/bus/initiate-booking`, payload);
  return response.data;
};

const createBooking = async (payload: any): Promise<any> => {
  const response = await apiClient.post(`/bus/create-booking`, payload);
  return response.data;
};

const bookingSuccess = async (payload: any): Promise<RazorpayPaymentResponse> => {
  const response = await apiClient.post(`/bus/complete-payment`, payload);
  return response.data;
};

const getBookings = async (): Promise<any> => {
  const response = await apiClient.post(`/bus/my-bookings`);
  return response.data;
};

const bookingService = { initiateBooking, createBooking, bookingSuccess, getBookings };
export default bookingService;
