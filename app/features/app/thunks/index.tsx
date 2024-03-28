import {createAsyncThunk} from '@reduxjs/toolkit';
import httpClient from '../../../utils/httpClient';

export const fetchHomePageBannersAsync = createAsyncThunk(
  'app/homeBanners',
  async params => {
    const {apiKey, authorization} = params;

    const response = await httpClient.callAPI(
      'GET',
      '/api/v2/banner/mweb/home-page',
      params,
      apiKey,
      authorization,
    );
    return response;
  },
);
