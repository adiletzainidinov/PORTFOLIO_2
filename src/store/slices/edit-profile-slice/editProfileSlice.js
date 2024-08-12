import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isLoading: false,
};

const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    signIn(state) {
      state.isAuth = true;
      state.isLoading = true;
    },
    loaderFalse(state){
        state.isLoading = false
    },
    loaderTrue(state) {
        state.isLoading = true;
      },
  },
});

export const { signIn,loaderFalse,loaderTrue } = editProfileSlice.actions;
export default editProfileSlice;
