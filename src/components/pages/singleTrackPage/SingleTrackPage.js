import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Box, CircularProgress } from "@mui/material";

import { useAuth } from "../../../hooks/useAuth";
import { useAddInFavoritesMutation, useRemoveFromFavoritesMutation } from "../../../api/favoriteApi";
import { FavoriteBtn } from "../../favoriteBtn/FavoriteBtn";
import { useGetTrackQuery } from "../../../api/tracksApi";
import { useGetFavoritesByIdQuery } from "../../../api/favoriteApi";
import "./singleTrackPage.css";

const SingleTrackPage = () => {

	const navigate = useNavigate();

	const {trackId} = useParams(); 
	const {uid, isAuth} = useAuth();
	const {data: track} = useGetTrackQuery(trackId);
	const {data: favoriteTrack, isFetching} = useGetFavoritesByIdQuery({id: trackId, uid});

	const [addFavorite] = useAddInFavoritesMutation();
	const [removeFavorite] = useRemoveFromFavoritesMutation();
	
	if(!track) {
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

	const changeStatusFavorite = async(e) => {
		e.preventDefault();
		if(!isAuth) {
			navigate("/login");
			return;
		}
		if(!favoriteTrack) {
			await addFavorite({track, uid});
		} else {
			await removeFavorite({id: track.id, uid});
		}
	};

	return (
		<div className="main">
			<div className="main-item">
				<img
					width={500}
					height={500}
					src={track.album.cover_big}
					alt="Autor"
				/>
			</div>
			<div className="main-item">
				<p>Artist: {track.artist.name}</p>
				<p>Track: {track.title}</p>
				<div style={{cursor: "pointer"}}>
					<FavoriteBtn
						changeStatusFavorite={changeStatusFavorite}
						favoriteTrack={favoriteTrack}
						isFetching={isFetching}/>
				</div>
			</div>
		</div>
	);
};

export default SingleTrackPage;
