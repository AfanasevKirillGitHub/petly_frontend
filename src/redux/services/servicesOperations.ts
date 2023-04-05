import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IServicessApi,
  IServices,
} from '../../helpers/interfaces/servicesApiInterface/servicesApiInterface';
interface IData {
  lang: string;
}

export const servicesApi = createApi({
  reducerPath: 'services',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api/news',
    baseUrl: 'https://your-pets.onrender.com/api/services',
  }),
  tagTypes: ['services'],
  endpoints: builder => ({
    fetchServices: builder.query<IServices[], IData>({
      query: ({ lang = 'en' }) => ({
        method: 'GET',
        url: `/?lang=${lang}`,
      }),
      transformResponse: (response: IServicessApi) => response.services,
      providesTags: ['services'],
    }),
  }),
});

export const { useFetchServicesQuery } = servicesApi;
