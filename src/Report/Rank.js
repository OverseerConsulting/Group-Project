import React from 'react';
import axios from 'axios';



class Rank extends React.Component {
  state = {
    reports: [],
    isLoading: true,
    errors: null
  };



  getReports = async () => {
    await axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { Rank: response.data[0].rank},
          ));;
    console.log(this.state.Rank)
    
    
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
              const { Rank } = report;
              return (
            
               
                <pre>
                    <h4>{JSON.stringify(Rank)}</h4>
                    
                    
                  </pre>
                
              

              );
            })
          ) : (
              <p>Rank: {this.state.Rank}</p>
              
             
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default Rank;