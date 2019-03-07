import { VictoryBar, VictoryChart, VictoryStack, VictoryLabel, VictoryTheme } from 'victory';
import React from 'react';
import axios from 'axios';

class FullReport extends React.Component {
    state = {
        Report: {},
        reports: []
    }
    getReports() {
        const response = axios.get("http://localhost:5000/api/report")
            .then(response => this.setState(
                {
                    Report: response.data[0],
                    reports: response.data
                }
            )
            )
    }

    async componentDidMount() {
        await this.getReports();
    }

    render() {
        return (
            <div>
                <center><h1><b>REPORT</b></h1></center>


                <div class="center">
                    <select id="reportSelect" onChange={(e) => this.setState({ Report: this.state.reports[e.target.value] })}>
                        {this.state.reports.map((report) => <option key={report.document} value={this.state.reports.indexOf(report)}>{report.document}</option>)}
                    </select>
                    <p>File name: {this.state.Report.document}</p>
                    <p>Word Count: {this.state.Report.wordCount}</p>
                    <p>Score: {this.state.Report.score}</p>
                    <p>Flagged Word Count: {this.state.Report.flaggedWordCount}</p>
                    <p>Flagged Word Percentage: {this.state.Report.flagPercent}%</p>
                    <p>Status: {this.state.Report.status}</p>
                    <p>Rank: {this.state.Report.rank}</p>
                    <br></br>
                    <center><h3><b>Word Count Chart</b></h3></center>
                    <br></br>
                    <div>
                        <div className="App">
                            <VictoryChart style={{ parent: { maxWidth: "50%" } }}
                                theme={VictoryTheme.material}
                                padding={{ left: 90, top: 10, right: 10, bottom: 34 }}
                            >
                                <VictoryLabel
                                    Text="Word Found by Count" x={255} y={30} textAnchor="middle"
                                />
                                <VictoryStack
                                    horizontal={true}>
                                    <VictoryBar
                                        data={this.state.Report.words}
                                        x="word"
                                        y="count"
                                        barRatio={0.5} />
                                </VictoryStack>
                            </VictoryChart>
                            {/* <Chart Report={this.state.Report}/> */}
                        </div>
                    </div>
                </div>

            </div>



        );
    }
}
export default FullReport