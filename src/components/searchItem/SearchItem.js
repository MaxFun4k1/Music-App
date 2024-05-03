import { Link } from "react-router-dom";

export const SearchItem = ({track}) => {

	if(!track) {
		return (
			<div>Загрузка</div>
		);
	}

	return (
		<div style={{ listStyle: "none", padding: "2px 4px", display: "flex", alignItems: "center", width: 1150, maxWidth: "100%"}}>
			<div>
				<Link key={track.id} to={`/track/${track.id}`} style={{ color: "inherit", textDecoration: "inherit"}}>
					<img src={track.album.cover_small} alt="img track"/>
					<span style={{padding: "10px"}}>{track.title}</span>
				 </Link>
			</div>
		</div>
	);
};
