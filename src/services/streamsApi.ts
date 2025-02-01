import { apiSlice } from "./apiSlice";

export const streamsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStreams: builder.query<{ streams: IStream[] }, string>({
      query: () => "/streams",
    }),
  }),
});

export const { useGetStreamsQuery } = streamsApi;
