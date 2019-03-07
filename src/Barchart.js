import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react';
import Words from './Report/Words.js' 
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Barchart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			
			axisX: {
				title: "Words",
				reversed: true,
			},
			axisY: {
				title: "Count",
				reversed: false,
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  1, label: <Words />},
					{ y:  10, label: <Words /> },
					{ y:  20, label: "Hermione" },
					{ y:  30, label: "Dobby" },
					{ y:  40, label: "Wizard" },
					{ y:  50, label: "Muggle" },
					{ y:  60, label: "Hogwarts" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Barchart ;                                 