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
                    <center><select id="reportSelect" onChange={(e) => this.setState({ Report: this.state.reports[e.target.value] })}>
                        {this.state.reports.map((report) => <option key={report.document} value={this.state.reports.indexOf(report)}>{report.document}</option>)}
                    </select></center>
                    <center><h3>File Name: {this.state.Report.document}</h3></center>
                    <center><h3>Word Count: {this.state.Report.wordCount}</h3></center>
                    <center><h3>Score: {this.state.Report.score}</h3></center>
                    <center><h3>Flagged Word Count: {this.state.Report.flaggedWordCount}</h3></center>
                    <center><h3>Flagged Word Percentage: {this.state.Report.flagPercent}%</h3></center>
                    <center><h3>Status: {this.state.Report.status}</h3></center>
                    <center><h3>Rank: {this.state.Report.rank}</h3></center>
                    <br></br>
                    <center><h2><b>Word Count Chart</b></h2></center>
                    <br></br>
                    <div>
                        <div className="App">
                            <VictoryChart style={{ parent: { maxWidth: "50%" } }}
                                theme={VictoryTheme.material}
                                padding={{ left: 90, top: 10, right: 10, bottom: 34 }}
                                width={400}
                                height={400}
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