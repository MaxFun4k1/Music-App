import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, IconButton, Box } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";

import {FavoriteBtn} from "../favoriteBtn/FavoriteBtn";
import { pauseTrack, playTrack, setActiveTrack } from "../../redux/slices/playerSlice";
import { useAddInFavoritesMutation, useRemoveFromFavoritesMutation, useGetFavoritesByIdQuery } from "../../api/favoriteApi";
import { useAuth } from "../../hooks/useAuth";
import { playerSelectors } from "../../redux";

import "./TrackItem.css";

const TrackItem = ({track}) => {

	const [activePlay, setActivePlay] = useState(false);
	const pause = useSelector(playerSelectors.pause);
	const {uid, isAuth} = useAuth();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [addFavorite] = useAddInFavoritesMutation();
	const [removeFavorite] = useRemoveFromFavoritesMutation();

	const {data: favoriteTrack, isFetching} = useGetFavoritesByIdQuery({id: track.id, uid});

	const play = (e) => {
		e.preventDefault();
		dispatch(setActiveTrack(track));
		setActivePlay(!!(!activePlay));
		if(!pause){
			dispatch(playTrack());
			return;
		} else {
			dispatch(pauseTrack());
			return;
		}
	};

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
		<div className="track">
			<IconButton onClick={play}>
				{activePlay
					? <Pause style={{fontSize: 30, color: "rgb(15, 230, 15)"}}/>
					: <PlayArrow style={{fontSize: 30, color: "rgb(15, 230, 15)"}}/>
				}
			</IconButton>
			<Box p={2}>
				<img width = {70} 
					height={70}
					src={track.album.cover_medium}  
					alt="img song"/>
			</Box>
			<Grid container direction="column">
				<Box p={1}>
					<div>{track.title}</div>
				</Box>
				<Box p={1}>
					<div>{track.artist.name}</div>
				</Box>
			</Grid>
			<FavoriteBtn 
				changeStatusFavorite={changeStatusFavorite}
				favoriteTrack={favoriteTrack}
				isFetching={isFetching}
			/>
		</div>
	);
};

export default TrackItem;