import FavoriteIcon from "@mui/icons-material/Favorite";
import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

export const FavoriteBtn = ({changeStatusFavorite, favoriteTrack, isFetching}) => {

	return (
		<div onClick={changeStatusFavorite}>
			{isFetching ? (<CircularProgress style={{color: "rgb(15, 230, 15)"}}/>) : (
				<FavoriteIcon style={favoriteTrack ? {fontSize: 30, margin: "30px", color: "#e53935"} : {fontSize: 30, margin: "30px"}}/>
			)}
		</div>
	);
};

FavoriteBtn.propTypes = {
	changeStatusFavorite: PropTypes.func.isRequired,
	favoriteTrack: PropTypes.object,
	isFetching: PropTypes.bool
};
