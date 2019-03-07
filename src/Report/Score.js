import React from 'react';
import axios from 'axios';



class Report3 extends React.Component {
  state = {
    reports: [],
    isLoading: true,
    errors: null
  };



  getReports = async () => {
    await axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { Score: response.data[0].score},
          ));;
    console.log(this.state.Score)
    
    
  }

  componentDidMount() {
    this.getReports();
  }

  render() {
    const { isLoading, reports} = this.state;
    return (
      <React.Fragment>
       <div>
          {!isLoading ? (
            reports.map(report => {
              const { Score } = report;
              return (
            
               
                <pre>
                    <h4>{JSON.stringify(Score)}</h4>
                    
                    
                  </pre>
                
              

              );
            })
          ) : (
              <p>Score: {this.state.Score}</p>
              
             
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default Report3;