import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import UploadFile from "./UploadFile.js";
import Report from "./Report.js";
import Reg from './Reg.js'

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Overseer Consulting</h1>
          <ul className="header">
          <li><NavLink exact to="/">Login</NavLink></li>
          <li><NavLink to="/reg">Registration</NavLink></li>
            <li><NavLink to="/upload">Upload files</NavLink></li>
            <li><NavLink to="/contact">View reports</NavLink></li>
         
          </ul>
        
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/upload" component={UploadFile}/>
            <Route path="/contact" component={Report}/>
         
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;