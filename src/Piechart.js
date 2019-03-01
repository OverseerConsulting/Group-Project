import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react';
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App2 extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 12,  label: "Word count" },
					{ y: 49, label: "Severity" },
					{ y: 9, label: "Sucessful Upload" },
					{ y: 5, label: "Sucessful Download" },
					{ y: 19, label: "Social" }
				]
			}]
		}
		return (
		<left><div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div></left>
		);
	}
}
export default App2 ;          