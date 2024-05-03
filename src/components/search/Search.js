import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IconButton, InputBase, Paper, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { setSearchValue } from "../../redux/slices/searchSlice";
import { SearchItem } from "../searchItem/SearchItem";
import { useGetSearchItemQuery } from "../../api/tracksApi";
import { useDebounce } from "../../hooks/useDebounce";
import { useAuth } from "../../hooks/useAuth";
import { searchSelectors } from "../../redux";
import { useAddInHistoryMutation } from "../../api/historyApi";

import "./search.css";

export function Search() {

	const navigate = useNavigate();
	const inputRef = useRef(null);
	const dispatch = useDispatch();

	const search = useSelector(searchSelectors.search);
	const [open, setOpen] = useState(false);
	const {uid, isAuth} = useAuth();

	const debounced = useDebounce(search, 300);
	const [addInHistory] = useAddInHistoryMutation();
	const {data, isLoading} = useGetSearchItemQuery(debounced, {
		skip: debounced.length < 1,
		refetchOnFocus: true
	});


	const handleSubmit = async (e) => {
		e.preventDefault();
		setOpen(false);

		if(!debounced) {
			return;
		}

		navigate(`/searchPage?search=${debounced}`);

		if(isAuth) {
			await addInHistory({
				searchUrl: window.location.href,
				uid,
				search: debounced
			});
		}
	};

	const onSearchButtonClick = (e) => {
		e.preventDefault();
		dispatch(setSearchValue({searchValue: e.target.value}));
		if(e.target.value.length) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};

	const onHide = () => {
		setOpen(false);
	};

	return (
		<>
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 1150, maxWidth: "100%" }}
				onSubmit={handleSubmit}>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Search tracks"
					inputProps={{ "aria-label": "search google maps" }}
					value={search}
					onChange={onSearchButtonClick}
					onBlur={onHide}
					ref={inputRef}/>
				<IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={handleSubmit}>
					<SearchIcon/>
				</IconButton>
			</Paper>
			{open && <ul className="dropdown_open">	
				{isLoading && <CircularProgress/>}
				{data && data.map(track => 
					<SearchItem key={track.id} track={track}/>
				)}
			</ul>}
		</>
	);
}