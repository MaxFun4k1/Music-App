import { Link } from "react-router-dom";

import { Box, CircularProgress } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import  TrackItem  from "../trackItem/TrackItem";
import { useGetPlaylistQuery } from "../../api/tracksApi";

const TrackList = () => {
	const {data: tracks, isLoading} = useGetPlaylistQuery();
	
	if(isLoading){
		return (
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="100vh">
				<CircularProgress style={{color: "rgb(15, 230, 15)"}}/>
			</Box>
		);		
	}

	return (
		<Grid2 container direction={"column"}>
			<Box p={2}>
				{tracks.map((track) => 
					<Link key={track.id} to={`track/${track.id}`} style={{ color: "inherit", textDecoration: "inherit"}}>
						<TrackItem key={track.id} track={track}/>
					</Link>
				)}
			</Box>
		</Grid2>
	);
};

export {TrackList};