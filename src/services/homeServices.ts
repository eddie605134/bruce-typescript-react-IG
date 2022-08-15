import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IGPost = {
  id: number;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

type IGStory = {
  id: number;
  name: string;
  avatar: string;
};

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://eddie605134.github.io/romon30/ig_imitate" }),
  endpoints: (builder) => ({
    getIGStoies: builder.query<IGStory[], string>({
      // query: (id) => {
      //   if (id !== "all") {
      //     return `stories/${id}`;
      //   }
      //   return "stories";
      // },
      query: () => {
        return "stories.json";
      },
    }),
    getIGPosts: builder.query<IGPost[], string>({
      // query: (id) => {
      //   if (id !== "all") {
      //     return `posts/${id}`;
      //   }

      //   return "posts"
      // }
      query: () => {
        return "posts.json"
      }
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIGStoiesQuery, useGetIGPostsQuery } = homeApi;

export const homeApiReducer = homeApi.reducer;