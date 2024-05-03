import { TrackList } from "../../trackList/TrackList";
import "./ComponentsTracks.css";


const ComponentsTracks = () => {
	return  (
		<div className="main">
			<div className="container">
				<div className="mainInner">
					<p>Track List: </p>
					<TrackList/>
				</div>
			</div>
		</div>

	);
};

export default ComponentsTracks;