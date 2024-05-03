import { createAsyncThunk } from "@reduxjs/toolkit";
import {onAuthStateChanged, signInWithEmailAndPassword, getAuth} from "firebase/auth";

import { auth } from "../../firebase";
import { setUser, removeUser } from "../slices/userSlice";

export const loginAuth = (email, password) => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
		.then(({user}) => {
			(setUser({
				email: user.email,
				uid: user.uid,
				token: user.accessToken
			}));
		})
		.catch(() => alert("Invalid user!"));
};

export const checkAuth = createAsyncThunk(
	"auth/checkAuth",
	(_, { dispatch }) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				return dispatch(setUser({ email: user.email, uid: user.uid }));
			} else {
				return dispatch(removeUser());
			}
		});
	},
);