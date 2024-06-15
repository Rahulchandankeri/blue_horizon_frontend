import apiClient from './apiClient';

interface User {
  email_id: string;
  otp?: any;
}

const login = async (payload: User): Promise<User[]> => {
  const response = await apiClient.post('/user/signup', payload);
  return response.data;
};
const verifyOTP = async (payload: User): Promise<User[]> => {
  const response = await apiClient.post('/user/validate-otp', payload);
  return response.data;
};

const exports = { login, verifyOTP };
export default exports;
