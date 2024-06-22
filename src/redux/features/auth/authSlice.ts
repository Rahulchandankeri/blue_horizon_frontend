import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export interface AuthState {
  isUserLoggedIn: boolean;
}
const initialState: AuthState = {
  isUserLoggedIn: !!Cookies.get('accessToken'),
};

export const authSlice = createSlice({
  name: 'authDetails',
  initialState,
  reducers: {
    updateAuthDetails: (state, action) => {
      state.isUserLoggedIn = !!Cookies.get('accessToken');
    },
  },
});

export const { updateAuthDetails } = authSlice.actions;
export default authSlice.reducer;
