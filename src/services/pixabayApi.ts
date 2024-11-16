import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ImageItem {
  id: number;
  user: string;
  tags: string;
  webformatURL: string;
}

interface PixabayResponse {
  hits: ImageItem[];
  total: number;
  totalHits: number;
}

export const pixabayApi = createApi({
  reducerPath: 'pixabayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pixabay.com/api/' }),
  endpoints: (builder) => ({
    searchImages: builder.query<PixabayResponse, string>({
      query: (searchTerm) => 
        `?key=47074674-abbf0c58d927439ebe148907e&q=${searchTerm || 'knitting'}&image_type=photo&pretty=true`,
    }),    
  }),
});

export const { useSearchImagesQuery } = pixabayApi;
