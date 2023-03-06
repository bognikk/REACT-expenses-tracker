import ChartBar from "./ChartBar";

import "./Chart.scss";

const Chart = (props) => {
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxVbalue={null}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
