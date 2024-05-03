import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { tracksApi } from "../api/tracksApi";
import { favoriteApi } from "../api/favoriteApi";
import { historyApi } from "../api/historyApi";

import user from "./slices/userSlice";
import player from "./slices/playerSlice";
import search from "./slices/searchSlice";

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === "string") {
		return next({
			type: action
		});
	}
	return next(action);
};

const store = configureStore({
	reducer: {
		user,
		player,
		search,
		[tracksApi.reducerPath]: tracksApi.reducer,
		[favoriteApi.reducerPath]: favoriteApi.reducer,
		[historyApi.reducerPath]: historyApi.reducer
	},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware({
			serializableCheck: false
		})
			.concat(stringMiddleware, tracksApi.middleware)
			.concat(stringMiddleware, favoriteApi.middleware)
			.concat(stringMiddleware, historyApi.middleware)
});

setupListeners(store.dispatch);

export * as authSelectors from "./selectors/authSelectors";
export * as playerSelectors from "./selectors/playerSelectors";
export * as searchSelectors from "./selectors/searchSelectors";
export default store;