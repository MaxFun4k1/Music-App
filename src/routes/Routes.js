import { 
	BrowserRouter as Router, 
	Route, 
	Routes, 
	Navigate, 
	Outlet 
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

import { useAuth } from "../hooks/useAuth";
import Player from "../components/player/Player";

const ComponentsTracks = lazy(() => import("../components/pages/componentsTracks/ComponentsTracks"));
const SingleTrackPage = lazy(() => import("../components/pages/singleTrackPage/SingleTrackPage"));
const SearchPage = lazy(() => import("../components/pages/searchPage/SearchPage"));
const Page404 = lazy(() => import("../components/pages/404"));
const LoginPage = lazy(() => import("../components/pages/LoginPage"));
const RegisterPage = lazy(() => import("../components/pages/RegisterPage"));
const History = lazy(() => import("../components/pages/history/History"));
const Favorite = lazy(() => import("../components/pages/favorite/Favorite"));
const Layout = lazy(() => import("../components/layout/Layout"));

const PrivateRoute = ({isAuth}) => {
	return <> {!isAuth ? <Navigate to="/login" /> : <Outlet />}</>;
};

export const Public = () => {

	const {isAuth} = useAuth();

	return (
		<Router>
			<Suspense fallback={<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="100vh">
				<CircularProgress style={{color: "rgb(15, 230, 15)"}}/>
			</Box>}>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element = {<ComponentsTracks/>}/>
						<Route path="*" element = {<Page404/>}/>
						<Route element = {<PrivateRoute isAuth={isAuth}/>}>
							<Route path="/history" element = {<History/>}/>
							<Route path="/favorite" element = {<Favorite/>}/>
						</Route>
						<Route path="/login" element = {<LoginPage/>}/>
						<Route path="/register" element = {<RegisterPage/>}/>
						<Route path="/searchPage" element = {<SearchPage/>}/>
						<Route path="/track/:trackId" element = {<SingleTrackPage/>}/>
					</Route>
				</Routes>
				<Player/>
			</Suspense>
		</Router>
	);
};