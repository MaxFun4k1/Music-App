import { useContext } from "react";
import { IconButton } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ThemeContext } from "../../context/ThemeContext";

const ThemeButton = () => {

	const {toggleTheme, toggle} = useContext(ThemeContext);

	return (
		<IconButton onClick={toggle}>
			{
				toggleTheme ? <DarkModeIcon style={{color: "rgb(15, 230, 15)"}}/> :
					<LightModeIcon style={{color: "rgb(15, 230, 15)"}}/> 
			}
		</IconButton>
	);
};

export {ThemeButton};