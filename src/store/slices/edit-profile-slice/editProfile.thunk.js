import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const aboutMeThunk = createAsyncThunk(
  'about/aboutme',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://7f3ec3ddcb49231b.mokky.dev/portfolio',
        data
      );
      return response.data;
    } catch (error) {
      const axios = error;
      return rejectWithValue(axios.message);
    }
  }
);
