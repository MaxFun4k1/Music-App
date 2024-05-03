import { CircularProgress, Box} from "@mui/material";

import { useGetHistoryQuery } from "../../../api/historyApi";
import { useAuth } from "../../../hooks/useAuth";

import HistoryItem from "../../historyItem/HistoryItem";

const History = () => {

	const {uid} = useAuth();
	const {data, isLoading} = useGetHistoryQuery(uid);

	if(isLoading) {
		return <Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh">
			<CircularProgress style={{color: "rgb(15, 230, 15)"}}/>
		</Box>;
	}


	return data ? (
		<div>
			{Object.entries(data).map((searchResponse) => {
				const [key, {search, searchUrl}] = searchResponse;
				return <HistoryItem
					key={key}
					search={search}
					uniqKey={key}
					searchUrl={searchUrl}/>;
			})}
		</div>
	) : (
		<div className="main">
			нет данных
		</div>
	);
};

export default History;