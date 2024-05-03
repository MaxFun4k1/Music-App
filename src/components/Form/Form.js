import {useState} from "react";
import { Box, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const Form = ({title, handleClick}) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off">
			<TextField 
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				id="outlined-basic" 
				label="Email" 
				variant="outlined" />
			<TextField 
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				id="outlined-basic" 
				label="Password" 
				variant="outlined"/>
			<Button
				onClick={() => handleClick(email, password)}
				style={{color: "black", background: "rgb(15, 230, 15)"}}>
				{title}
			</Button>
		</Box>
	);
}; 

Form.propTypes = {
	title: PropTypes.string,
	email: PropTypes.string,
	pass: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
};

export default Form;