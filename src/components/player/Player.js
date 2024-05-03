import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { playerSelectors } from "../../redux";
import { pauseTrack, playTrack, setVolumeTrack } from "../../redux/slices/playerSlice";
import VolumeProgress from "../volumeProgress/VolumeProgress";

import "./player.css";


let audio;

const Player = () => {

	const dispatch = useDispatch();
	const {pause, volume, active} = useSelector(playerSelectors.player);

	useEffect(() => {
		if (!audio) {
			audio = new Audio();
		} else {
			setAudio();
			play();
		}
	}, [active]);

	const setAudio = () => {
		if (active) {
			if (active.preview === "") {
				return alert("Трек удален");
			}
			audio.src = active.preview;
			audio.volume = volume / 100;
		} 
	};

	const play = () => {
		if (pause) {
			dispatch(playTrack());
			audio.play();
		} else {
			dispatch(pauseTrack());
			audio.pause();
		}
	};

	const changeVolume = (e) => {
		audio.volume = Number(e.target.value) / 100;
		dispatch(setVolumeTrack(e.target.value));
	};

	if (!active) {
		return null;
	} 

	return (
		<div className="player">
			<IconButton onClick={play}>
				{pause
					? <PlayArrow style={{fontSize: 30, color: "black"}}/>
					: <Pause style={{fontSize: 30, color: "black"}}/>
				}
			</IconButton>
			<Box p={1}>
				<img width = {45} 
					height={45}
					src={active.album.cover_medium}
					alt="img song"/>
			</Box>
			<Grid container direction="column">
				<Box p={0}>
					<div>{active.title}</div>
				</Box>
				<Box p={0}>
					<div>{active.artist.name}</div>
				</Box>
			</Grid>
			<VolumeUp style={{ fontSize: "30px"}}/>
			<VolumeProgress left={volume} right={100} onChange={changeVolume}/>
		</div>
	);
};

export default Player;