import { createSlice } from '@reduxjs/toolkit';
import {
  aboutMeGet,
  aboutMeThunk,
  mainTestGet,
  maintTextPost,
  whoIAmGet,
  whoIAmPost,
} from './editProfile.thunk';

const initialState = {
  isAuth: false,
  isLoading: false,
  rules: false,
  loadingText: false,
  error: '',
  data: [],
  whoIAm: [],
  mainText: []
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
  extraReducers: (builder) => {

    // aboutMe

    builder.addCase(aboutMeThunk.pending, (state) => {
      state.loadingText = true;
    });
    builder.addCase(aboutMeThunk.fulfilled, (state) => {
      state.loadingText = false;
    });
    builder.addCase(aboutMeThunk.rejected, (state, action) => {
      state.loadingText = false;
      state.error = action.payload;
    });

    builder.addCase(aboutMeGet.pending, (state) => {
      state.loadingText = true;
    });
    builder.addCase(aboutMeGet.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loadingText = false;
    });
    builder.addCase(aboutMeGet.rejected, (state, action) => {
      state.loadingText = false;
      state.error = action.payload;
    });

    // whoIAm

    builder.addCase(whoIAmPost.pending, (state) => {
      state.loadingText = true;
    });
    builder.addCase(whoIAmPost.fulfilled, (state) => {
      state.loadingText = false;
    });
    builder.addCase(whoIAmPost.rejected, (state, action) => {
      state.loadingText = false;
      state.error = action.payload;
    });

    builder.addCase(whoIAmGet.pending, (state) => {
      state.loadingText = true;
    });
    builder.addCase(whoIAmGet.fulfilled, (state, action) => {
      state.whoIAm = action.payload;
      state.loadingText = false;
    });
    builder.addCase(whoIAmGet.rejected, (state, action) => {
      state.loadingText = false;
      state.error = action.payload;
    });

    // mainText

    builder.addCase(maintTextPost.pending, (state) => {
      state.loadingText = true;
    });
    builder.addCase(maintTextPost.fulfilled, (state) => {
      state.loadingText = false;
    });
    builder.addCase(maintTextPost.rejected, (state, action) => {
      state.loadingText = false;
      state.error = action.payload;
    });

    builder.addCase(mainTestGet.pending, (state) => {
      state.loadingText = true;
    });
    builder.addCase(mainTestGet.fulfilled, (state, action) => {
      state.mainText = action.payload;
      state.loadingText = false;
    });
    builder.addCase(mainTestGet.rejected, (state, action) => {
      state.loadingText = false;
      state.error = action.payload;
    });


  },
});

export const { signIn, loaderFalse, loaderTrue, rulesTrue, rulesFalse } =
  editProfileSlice.actions;
export default editProfileSlice;
