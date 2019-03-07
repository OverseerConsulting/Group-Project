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

    //console.log(thids.state.Wordds[0].wor)
    // console.log(this.state.Wordd[1].word)
    // console.log(this.state.Wordd[2].word)
    // console.log(this.state.Wordd[0].count)
    // console.log(this.state.Wordd[1].count)
    // console.log(this.state.Wordd[2].count)
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Words;