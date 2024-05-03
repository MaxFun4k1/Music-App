import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CircularProgress, Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import TrackItem from "../../trackItem/TrackItem";

import { useGetFavoritesQuery } from "../../../api/favoriteApi";
import { authSelectors } from "../../../redux";

import "../componentsTracks/ComponentsTracks.css";

const Favorite = () => {

	const uid = useSelector(authSelectors.uid);

	const {data, isLoading, isFetching} = useGetFavoritesQuery(uid);
	
	if(isLoading || isFetching) {
		return <Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh">
			<CircularProgress style={{color: "rgb(15, 230, 15)"}}/>
		</Box>;
	}

	return !!data.length ? (
		<div className="main">
			<Grid2 container direction={"column"}>
				<Box p={2}>
					{data.map((favorite) => 
						<Link key={favorite.id} to={`/track/${favorite.id}`} style={{ color: "inherit", textDecoration: "inherit"}}>
							<TrackItem key={favorite.id} track={favorite}/>
						</Link>,
					)}
				</Box>
			</Grid2>
		</div>
	) : (
		<div className="main">
			нет данных
		</div>
	);
};

export default Favorite;