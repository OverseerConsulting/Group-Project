import React from 'react';
import axios from 'axios';





class Report2 extends React.Component {
  state = {
    reports: [],
    isLoading: true,
    errors: null
  };



  getReports = async () => {
    await axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { WordC: response.data[0].wordCount},
          ));;
    console.log(this.state.WordC)
    
    
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
              const { WordC } = report;
              return (
            
               
                <pre>
                  
                    <h4>{JSON.stringify(WordC)}</h4>
                    
                    
                  </pre>
                
              

              );
            })
          ) : (
              <p>Word Count: {this.state.WordC}</p>
              
             
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default Report2;