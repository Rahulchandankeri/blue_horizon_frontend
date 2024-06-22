import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get('accessToken')}`,
  },
});

apiClient.interceptors.response.use(
  (config) => {
    const accessToken = Cookies.get('accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
