import React from 'react';
import axios from 'axios';



class FlaggedWC extends React.Component {
  state = {
    reports: [],
    isLoading: true,
    errors: null
  };



  getReports = async () => {
    await axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { FlaggedWC: response.data[0].flaggedWordCount},
          ));;
    console.log(this.state.FlaggedWC)
    
    
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
              const { FlaggedWC } = report;
              return (
            
               
                <pre>
                    <h4>{JSON.stringify(FlaggedWC)}</h4>
                    
                    
                  </pre>
                
              

              );
            })
          ) : (
              <p>Flagged Word Count: {this.state.FlaggedWC}</p>
              
             
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default FlaggedWC;