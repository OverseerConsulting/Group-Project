import React from 'react'

const fetchParams = {
  method: "GET",
  mode: "cors",
  cache: "default"
};
 
const url = "http://localhost:3002/api/report";
 
fetch(url, fetchParams)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  })
  .then(data => {
    const words = data.results;
    let wordData = [];
    words.forEach(function(word) {
      wordData.push([word.name, parseInt(word.height)]);
    });
    const chartOneData = {
      type: "bar",
      title: {
        text: "Fetch + REST API Endpoint Demo",
        adjustLayout: true
      },
      tooltip: {
        text: 'Name: %kt<br>Height: %vvcm'
      },
      scaleX: {
        label: {
          text: 'Words'
        },
        item: {
          angle: '-45'
        }
      },
      scaleY: {
        label: {
          text: 'Count'
        }
      },
      series: [
        {
          values: wordData
        }
      ],
      plotarea: {
        margin: 'dynamic'
      }
    };
    zingchart.render({
      id: "chart-one",
      data: chartOneData,
      height: "100%",
      width: "100%"
    });
  })
  .catch(err => {
    console.log("Error Getting Data From Star Wars API");
  });