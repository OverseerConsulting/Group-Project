import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryStack, VictoryAxis } from 'victory';
import axios from 'axios';

class Chart extends Component {
  constructor(props){
    super(props)
  }

  // getReports = async () => {
  //   await axios.get("http://localhost:5000/api/report")
  //     .then(response => this.setState(
  //       { Wordd: response.data[0].words[0].word},
  //         ));;
  //   console.log(this.state.Wordd)
    
    
  componentDidMount() {
  }
  
  render() {
    console.log(this.state.Report);
    return (
      <div className="App">

        <VictoryChart>
          <VictoryStack
            horizontal={true}>
            <VictoryBar
              data={this.props.Report.words}
              x="count"
              y="word" />
          </VictoryStack>
        </VictoryChart>
      </div>
    )
  }

}



export default Chart;