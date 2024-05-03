import {useSelector} from "react-redux";

import { authSelectors } from "../redux";

export const useAuth = () => {
	const {email, token, uid} = useSelector(authSelectors.user);

	return {
		isAuth: !!email,
		email,
		token,
		uid
	};
};