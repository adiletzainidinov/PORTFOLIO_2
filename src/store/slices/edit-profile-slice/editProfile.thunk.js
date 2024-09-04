import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const aboutMeGet = createAsyncThunk(
  'aboutme,get',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://7f3ec3ddcb49231b.mokky.dev/portfolio'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const aboutMeThunk = createAsyncThunk(
  'about/aboutme',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('https://7f3ec3ddcb49231b.mokky.dev/portfolio', data);

      dispatch(aboutMeGet());
    } catch (error) {
      const axios = error;
      return rejectWithValue(axios.message);
    }
  }
);
