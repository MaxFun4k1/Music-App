import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import { ThemeContext } from "../../context/ThemeContext";

import "./layout.css";

const Layout = () => {

	const {toggleTheme} = useContext(ThemeContext);

	return (
		<div className={toggleTheme ? "dark" : "light"}>
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;