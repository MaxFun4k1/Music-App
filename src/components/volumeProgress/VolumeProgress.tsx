interface VolumeProgressProps {
	left: number;
	right: number;
	onChange: () => void;
}

const VolumeProgress = ({left, right, onChange}: VolumeProgressProps) => {
	return (
		<div style={{display: "flex"}}>
			<input 
				type="range"
				min={0}
				max={right}
				value={left}
				onChange={onChange}/>
		</div>
	);
};

export default VolumeProgress;