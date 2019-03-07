import React, { Component } from 'react';


    class UploadFile extends Component {
      state = {
          data: null
        };
      
        componentDidMount() {
            // Call our fetch function below once the component mounts
          this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
        }
          // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
        callBackendAPI = async () => {
          const response = await fetch('/express_backend');
          const body = await response.json();
      
          if (response.status !== 200) {
            throw Error(body.message) 
          }
          return body;
        };
      
        render() {
          return (
            <div>
              <form action="/" encType="multipart/form-data" method="post">
              <input type="file" name="file-to-upload"/>
              <input type="submit" value="Upload"/>
              <input type="file" name="file-to-upload"/>
              <input type="submit" value="Upload"/>
              <input type="file" name="file-to-upload"/>
              <input type="submit" value="Upload"/>
              </form>
              <p className="App-intro">{this.state.data}</p>
            </div>
          );
        }
      }
      
      export default UploadFile;