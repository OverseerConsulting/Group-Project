import React from 'react';
import axios from 'axios';



class FlaggedP extends React.Component {
  state = {
    reports: [],
    isLoading: true,
    errors: null
  };



  getReports = async () => {
    await axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { FlaggedP: response.data[0].flagPercent},
          ));;
    console.log(this.state.FlaggedP)
    
    
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
              const { FlaggedP } = report;
              return (
            
               
                <pre>
                    <h4>{JSON.stringify(FlaggedP)}</h4>
                    
                    
                  </pre>
                
              

              );
            })
          ) : (
              <p>Flagged Word Percentage: {this.state.FlaggedP}%</p>
              
             
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default FlaggedP;