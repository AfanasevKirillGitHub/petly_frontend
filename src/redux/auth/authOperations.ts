import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ICredentials,
  IAuth,
} from '../../helpers/interfaces/auth/authInterfaces';
import { selectToken } from './authSelectors';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://your-pets.onrender.com/api/users';

const setAuthHeader = (token: String): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk<
  IAuth,
  ICredentials,
  {
    rejectValue: string;
  }
>('auth/signUp', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<IAuth>('/register', credentials);
    setAuthHeader(data.dataUser.token);
    console.log(data)
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk<
  IAuth,
  ICredentials,
  {
    rejectValue: string;
  }
>('auth/signIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<IAuth>('/login', credentials);
    setAuthHeader(data.dataUser.token);
    console.log(data)
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = selectToken(thunkAPI.getState() as RootState);
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get<IAuth>('/current');
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
