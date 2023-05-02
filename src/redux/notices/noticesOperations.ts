import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INotice } from '../../helpers/interfaces/noticeApiInterface/noticeApiInterface';
import { RootState } from '../store';

export const noticesApi = createApi({
  reducerPath: 'notices',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:8080/api/notices',
    baseUrl: 'https://your-pets.onrender.com/api/notices',
    prepareHeaders: (headers, { getState }) => {
      const token: string | null = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }
      return headers;
    },
  }),
  tagTypes: ['notices'],
  endpoints: builder => ({
    fetchNotices: builder.query<INotice[] | [], any>({
      query: ({ lang = 'en', page = '1', limit = '20' }) => ({
        method: 'GET',
        url: `/?lang=${lang}&page=${page}&limit=${limit}`,
      }),
      providesTags: ['notices'],
    }),
    addNotices: builder.mutation<any, any>({
      query: notice => ({
        method: 'POST',
        url: '/',
        body: notice,
      }),

      invalidatesTags: ['notices'],
    }),
    fetchById: builder.query<INotice, any>({
      query: ({ lang = 'en', page = '1', limit = '20', id }) => ({
        method: 'GET',
        url: `/card/${id}?lang=${lang}&page=${page}&limit=${limit}`,
      }),
      providesTags: ['notices'],
    }),
    addNoticesToFavorite: builder.mutation<any, any>({
      query: id => ({
        method: 'POST',
        url: `/favorites/${id}`,
      }),

      invalidatesTags: ['notices'],
    }),
    removeNoticesFromFavorite: builder.mutation<any, any>({
      query: id => ({
        method: 'DELETE',
        url: `/favorites/${id}`,
      }),

      invalidatesTags: ['notices'],
    }),
    fetchFavorite: builder.query<INotice[] | [], any>({
      query: ({ lang = 'en', page = '1', limit = '20' }) => ({
        method: 'GET',
        url: `/favorite?lang=${lang}&page=${page}&limit=${limit}`,
      }),
      providesTags: ['notices'],
    }),
    fetchOwn: builder.query<INotice[] | [], any>({
      query: ({ lang = 'en', page = '1', limit = '20' }) => ({
        method: 'GET',
        url: `/own?lang=${lang}&page=${page}&limit=${limit}`,
      }),
      providesTags: ['notices'],
    }),
    fetchByCategory: builder.query<INotice[] | [], any>({
      query: ({ lang = 'en', page = '1', limit = '20', category }) => ({
        method: 'GET',
        url: `/${category}?lang=${lang}&page=${page}&limit=${limit}`,
      }),
      providesTags: ['notices'],
    }),
    removeOwn: builder.mutation<any, any>({
      query: id => ({
        method: 'DELETE',
        url: `/own/${id}`,
      }),

      invalidatesTags: ['notices'],
    }),
  }),
});

export const {
  useFetchNoticesQuery,
  useAddNoticesMutation,
  useFetchByIdQuery,
  useAddNoticesToFavoriteMutation,
  useRemoveNoticesFromFavoriteMutation,
  useFetchFavoriteQuery,
  useFetchOwnQuery,
  useFetchByCategoryQuery,
  useRemoveOwnMutation,
} = noticesApi;
