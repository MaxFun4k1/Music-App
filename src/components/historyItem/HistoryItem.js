import { Link } from "react-router-dom";

import { List, ListItem, IconButton, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import HistoryIcon from "@mui/icons-material/History";

import { useAuth } from "../../hooks/useAuth";
import { useRemoveFromHistoryMutation } from "../../api/historyApi";

import "../../style/styleTrackComponent.css";

const HistoryItem = ({search, uniqKey, 	searchUrl}) => {

	const {uid} = useAuth();
	const [removeFromHistory] = useRemoveFromHistoryMutation();

	return (
		<Link to={searchUrl}>
			<div className="main">
				<List>
					<ListItem
						secondaryAction={
							<IconButton edge="end" 
								aria-label="delete"
								onClick={(e) => {
									e.preventDefault();
									removeFromHistory({uid, uniqKey});
								}}>
								<DeleteIcon 
									style={{color: "white"}}/>
							</IconButton>
						}>
						<ListItemAvatar>
							<Avatar>
								<HistoryIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={search}/>
					</ListItem>
				</List>
			</div>
		</Link>
	);
};

export default HistoryItem;