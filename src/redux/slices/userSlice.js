import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "@firebase/auth";


const initialState = {
	statusAuth: "LOADING",
	email: null,
	token: null,
	uid: null,
};

export const loginAction = createAsyncThunk(
	"user/login",
	async ({email, password}) => {
		const auth = getAuth();
		const response = await signInWithEmailAndPassword(auth, email, password);
		return response.user;
	}
);

export const registerAction = createAsyncThunk(
	"user/register",
	async ({email, password}) => {
		const auth = getAuth();
		const response = await createUserWithEmailAndPassword(auth, email, password);
		return response.user;
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.uid = action.payload.uid;
			state.statusAuth = "SUCCESS";
		},
		removeUser(state) {
			state.email = null;
			state.token = null;
			state.uid = null;
			state.statusAuth = "SUCCESS";
		}
	}, 
	extraReducers: (builder) =>{
		builder
			.addCase(loginAction.fulfilled, (state, action) => {
				state.email = action.payload.email;
				state.token = action.payload.token;
				state.uid = action.payload.uid;
			})
			.addCase(registerAction.fulfilled, (state, action) => {
				state.email = action.payload.email;
				state.token = action.payload.token;
				state.uid = action.payload.uid;
			});
	}
});

const {actions, reducer} = userSlice;

export default reducer;
export const {setUser, removeUser} = actions;
