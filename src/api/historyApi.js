import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://music-app-42ab3-default-rtdb.firebaseio.com/";

export const historyApi = createApi({
	reducerPath: "historyApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
  	}),
  	tagTypes: ["History"],
  	endpoints: (build) => ({
		getHistory: build.query({
    		query: (uid) => {
        		return {
          			url: `history/${uid}.json`,
          			method: "GET",
        		};
      		},
      		providesTags: ["History"],
    	}),
    	addInHistory: build.mutation({
      		query: ({ searchUrl, uid, search }) => {
        		return {
          			url: `history/${uid}.json`,
          			method: "POST",
          			body: { searchUrl, search },
        		};
      		},
      		invalidatesTags: ["History"],
    	}),
    	removeFromHistory: build.mutation({
    		query: ({ uid, uniqKey }) => {
        		return {
        			url: `history/${uid}/${uniqKey}.json`,
          			method: "DELETE",
        		};
    		},
    		invalidatesTags: ["History"],
		}),
	}),
});

export const {
	useAddInHistoryMutation,
	useGetHistoryQuery,
	useRemoveFromHistoryMutation,
} = historyApi;