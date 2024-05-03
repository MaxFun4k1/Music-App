import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	search: ""
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.search = action.payload.searchValue;
		}
	}
});

const {actions, reducer} = searchSlice;

export default reducer;
export const {setSearchValue} = actions;