import React from 'react';
import {VictoryBar 
}from "vicotry";

import "./styles.css";

function BarChart() {
    return (
      <div className="App">
        <h1>The Most Basic Example</h1>
        <VictoryChart>
          <VictoryBar />
        </VictoryChart>
        <VictoryChart>
          <VictoryLine />
        </VictoryChart>
        <VictoryPie />
      </div>
    );
  }
  
  const container = document.createElement("div");
  document.body.appendChild(container);
  render(<BarChart />, container);