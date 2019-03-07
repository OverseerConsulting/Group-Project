import React from 'react';
import axios from 'axios';



class Status extends React.Component {
  state = {
    reports: [],
    isLoading: true,
    errors: null
  };



  getReports = async () => {
    await axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { Stat: response.data[0].status},
          ));;
    console.log(this.state.Stat)
    
    
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
              const { Stat } = report;
              return (
            
               
                <pre>
                    <h4>{JSON.stringify(Stat)}</h4>
                    
                    
                  </pre>
                
              

              );
            })
          ) : (
              <p>Status: {this.state.Stat}</p>
              
             
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default Status;