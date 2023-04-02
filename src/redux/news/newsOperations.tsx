import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  INews,
  INewsApi,
} from '../../helpers/interfaces/newsApiInterface/newsApiInterface';
interface IData {
  lang: string;
  keyword?: string;
}

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/news',
  }),
  tagTypes: ['news'],
  endpoints: builder => ({
    fetchNews: builder.query<INews[], IData>({
      query: ({ lang = 'en', keyword = '' }) => ({
        method: 'GET',
        url: `/?lang=${lang}&key=${keyword}`,
      }),
      transformResponse: (response: INewsApi) => response.news,
      providesTags: ['news'],
    }),
  }),
});

export const { useFetchNewsQuery } = newsApi;
