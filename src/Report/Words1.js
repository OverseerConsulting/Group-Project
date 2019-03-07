import React from 'react';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryStack, VictoryLabel, VictoryTheme } from 'victory';
import Chart from '../Chart';
import { async } from 'q';



class Words extends React.Component {
  state = {
    Report: {},
    reports: [],
    isLoading: true,
    errors: null
  };

  constructor() {
    super();
  }


  getReports() {
    const response = axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { Report: response.data[2] }
      )
      )
  }

  async componentDidMount() {
    await this.getReports();
  }

  render() {
    const { isLoading, reports, count, word } = this.state;

    return (
      <React.Fragment>
        <div>
          <div className="App">
            <VictoryChart style={{ parent: { maxWidth: "50%" }}}
              theme={VictoryTheme.material}
              padding={{ left: 90, top: 10, right: 10, bottom: 34 }}
            >
              <VictoryStack
                horizontal={true}>
                <VictoryBar
                  style={{ data: { fill: "#c43a31" } }}
                  data={this.state.Report.words}
                  x="word"
                  y="count"
                  barRatio={0.7} />
              </VictoryStack>
            </VictoryChart>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Words;