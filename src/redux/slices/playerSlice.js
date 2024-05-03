import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pause: false,
	volume: 50,
	active: null
};

const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		pauseTrack: state => {
			state.pause = true;
		},
		playTrack: state => {
			state.pause = false;
		},
		setVolumeTrack: (state, action) => {
			state.volume = action.payload;
		},
		setActiveTrack: (state, action) => {
			state.active = action.payload;
		}
	}
});

const {actions, reducer} = playerSlice;

export default reducer;
export const {
	pauseTrack,
	playTrack,
	setVolumeTrack,
	setActiveTrack
} = actions;