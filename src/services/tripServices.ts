import apiClient from './apiClient';

const getAvailableTrips = async (payload: any): Promise<any> => {
  const response = await apiClient.post(`/bus/getTrips`, payload);
  return response.data;
};
export { getAvailableTrips };

const tripServices = { getAvailableTrips };
export default tripServices;
