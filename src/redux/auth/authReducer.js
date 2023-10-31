import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null,
  email: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      login: payload.login,
      email: payload.email,
    }),
  },
});

export const { updateUserProfile } = authSlice.actions;

export default authSlice.reducer;
