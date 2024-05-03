import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";

import { CircularProgress, Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { setSearchValue } from "../../../redux/slices/searchSlice";
import { useGetSearchBySuggestQuery } from "../../../api/tracksApi";
import TrackItem from "../../trackItem/TrackItem";

import "../../../style/styleTrackComponent.css";

const SearchPage = () => {

	const dispatch = useDispatch();

	const [searchParams] = useSearchParams();
	const searchQueryParam = searchParams.get("search");
	const {data, isLoading} = useGetSearchBySuggestQuery({search: searchQueryParam});

	useEffect(() => {
		if (!searchQueryParam) {
		  return;
		}
		dispatch(setSearchValue({ searchValue: searchQueryParam }));
	  }, [dispatch, searchQueryParam]);

	if(isLoading) {
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

export default SearchPage;