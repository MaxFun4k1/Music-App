import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { getVinylsForFavorite } from "../../utils/getVinylsForFavorite";

const BASE_URL = "https://music-app-42ab3-default-rtdb.firebaseio.com/";

export const favoriteApi = createApi({
	reducerPath: "API",
	tagTypes: ["Favorites", "FavoritePage"],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
  	}),
	endpoints: (build) => ({
		getFavorites: build.query({
			query: (uid) => {
				return {
					url: `favorites/${uid}.json`,
				};
			},
			providesTags: ["FavoritePage"],
			transformResponse: (data) => {
				if (!data) {
					return [];
				  }
				  const res = Object.values(data);
				  return res.map((vinyl) => Object.values(vinyl)[0]);
			},
		}),
    	getFavoritesById: build.query({
      		query: ({ id, uid }) => {
        		return {
          			url: `favorites/${uid}/${"isFavorite" + id}.json`,
        		};
      		},
      		providesTags: (_, __, { id }) => [{ type: "Favorites", id }],
    	}),
    	addInFavorites: build.mutation({
    		query: ({ track, uid }) => {
        		return {
          			url: `favorites/${uid}/${"isFavorite" + track.id}.json`,
          			method: "POST",
          			body: track,
        		};
      		},
      		invalidatesTags: (_, __, { track }) => {
        	return [{ type: "Favorites", id: track.id }, "FavoritePage"];
      		},
    	}),
    	removeFromFavorites: build.mutation({
      		query: ({ id, uid }) => {
        		return {
          			url: `favorites/${uid}/${"isFavorite" + id}.json`,
          			method: "DELETE",
        		};
			},
    		invalidatesTags: (_, __, { id }) => {
    			return [{ type: "Favorites", id }, "FavoritePage"];
    		},
		}),
	}),
});

export const {
	useGetFavoritesByIdQuery,
	useGetFavoritesQuery,
	useAddInFavoritesMutation,
	useRemoveFromFavoritesMutation,
} = favoriteApi;