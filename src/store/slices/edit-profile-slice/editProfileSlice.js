import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isLoading: false,
  rules: false,
};

const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    signIn(state) {
      state.isAuth = true;
      state.isLoading = true;
      state.rules = true;
    },
    loaderFalse(state) {
      state.isLoading = false;
    },
    loaderTrue(state) {
      state.isLoading = true;
    },
    rulesTrue(state) {
      state.rules = true;
    },
    rulesFalse(state) {
      state.rules = false;
      state.isLoading = true;
    },
  },
});

export const { signIn, loaderFalse, loaderTrue, rulesTrue, rulesFalse } =
  editProfileSlice.actions;
export default editProfileSlice;
