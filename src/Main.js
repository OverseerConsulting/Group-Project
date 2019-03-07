import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Login from "./Login/Login.js";
import UploadFile from "./Upload/UploadFile.js";
import Report from "./Report/Print.js";
import Reg from './Registration/Reg.js';
import logo from './logo.png';


 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <img src={logo} className="App-logo" alt="logo" align ="right" />
          <br></br><br></br>
          <h1>Overseer Consulting: Project Thorium</h1>
          
          <ul className="header">
          <li><NavLink exact to="/">Login</NavLink></li>
          <li><NavLink to="/reg">Registration</NavLink></li>
            <li><NavLink to="/upload">Upload Files</NavLink></li>
            <li><NavLink to="/report">View Reports</NavLink></li>
            
         
          </ul>
        
          <div className="content">
            <Route exact path="/" component={Login}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/upload" component={UploadFile}/>
            <Route path="/report" component={Report}/>
            
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;