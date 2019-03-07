import React, { Component } from 'react';


    class UploadFile extends Component {
      state = {
          data: null
        };
      
        componentDidMount() {
          this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
        }
        
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
              <p></p>
              <center><h2>Upload a File to be Analysed</h2></center>
              <br></br>
              <center><h3>The upload function only allows PDF, TXT and CSV file formats</h3></center>
              <p></p>
              <br></br>
              <center><form class="uploadForm" action="/" encType="multipart/form-data" method="post">
              <div>
              <input class="upload" type="file" name="file-to-upload"/>
              </div>
              <input class="uploadbutton" type="submit" value="Upload"/>
              </form></center>
              <p className="App-intro">{this.state.data}</p>
            </div>
          );
        }
      }
      
      export default UploadFile;