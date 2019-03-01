import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Barchart extends React.Component {
 
 
    state = {
    dataBar: {
      labels: ["Harry", "Ron", "Hermione", "Granger", "Gryffindor", "Hagrid", "Dumbledore"],
      datasets: [
        {
          label: "Score",
          data: [11, 9, 9, 4, 2, 12, 10],
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        },
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }


render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Bar Chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default Barchart;