import { apiSlice } from "./apiSlice";

export const chartsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCharts: builder.query({
      query: () => ({
        url: "/charts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetChartsQuery } = chartsApi;
