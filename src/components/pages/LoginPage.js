import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginAction } from "../../redux/slices/userSlice";

import Form from "../Form/Form";

const LoginPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password) => {
		dispatch(loginAction({email, password}));
		navigate("/");
	};

	return (
		<div style={{background: "white",
			padding: "15px", 
			marginLeft: "auto",
			marginRight: "auto",
			width: "30em"}}>
			<Form
				title="sign in"
				handleClick={handleLogin}/>
			<p>
				Don't have an account? <Link to="/register">Register</Link>
			</p>
		</div>
	);
};

export default LoginPage;
