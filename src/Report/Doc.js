import React from 'react';
import axios from 'axios';



class Doc extends React.Component {
  state = {
    reports: [],
    isLoading: true,
    errors: null
  };



  getReports = async () => {
    await axios.get("http://localhost:5000/api/report")
      .then(response => this.setState(
        { Name: response.data[0].document},
          ));;
    console.log(this.state.Name)
    
    
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
              const { Name } = report;
              return (
            
               
                <pre>
                    <h4>{JSON.stringify(Name)}</h4>
                    
                    
                  </pre>
                
              

              );
            })
          ) : (
              <p>File name: {this.state.Name}</p>
              
             
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default Doc;