import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Form from "../Form/Form";

import { registerAction } from "../../redux/slices/userSlice";

const RegisterPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = (email, password) => {

		dispatch(registerAction({email, password}));
		navigate("/");
	};

	return (
		<div style={{background: "white", 
			padding: "15px",
			marginLeft: "auto",
			marginRight: "auto",
			width: "30em"}}>
			<Form
				title="register"
				handleClick={handleRegister}/>
			<p>
				Already have an account? <Link to="/login">Sign in</Link>
			</p>
		</div>
	);
};

export default RegisterPage;