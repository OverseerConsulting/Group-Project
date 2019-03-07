import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
// import User from '../../UserRestApi/models/user-details.js';


class RegForm extends Component {
    
    constructor(props) {
    super(props);



    this.state = {
        RegFirstName: '',
        RegLastName: '',
        RegEmail: '', 
        RegPassword: '',
        RegJobRole: '',
        RegClearenceLevel : '',
    }
}
handleChangeFirstName = event =>{
    this.setState({RegFirstName : event.target.value});
}
handleChangeLastName = event =>{
    this.setState({RegLastName : event.target.value});
}
handleChangeEmail = event =>{
    this.setState({RegEmail : event.target.value});
}
handleChangePassword = event =>{
    this.setState({RegPassword : event.target.value});
}
handleChangeJobrole= event =>{
    this.setState({RegJobRole : event.target.value});
}
handleChangeclearenceLevel = event =>{
    this.setState({RegClearenceLevel : event.target.value});
}

handelSubmit = event => {
    event.preventDefault();

    // const newuser = new User(
        const user = {
        firstName: this.state.RegFirstName,
        lastName:  this.state.RegLastName,
        email: this.state.RegEmail,
        password: this.state.RegPassword,
        jobRole: this.state.RegJobRole,
        clearenceLevel: this.state.RegClearenceLevel,
    } 
    // )
    axios.post('http://localhost:4000/api/users', user)
    .then(res => {
        console.log(res)
        console.log(res.data)
    })
}
       

  render() {
    return (
      <div id = "new-user-container">
          <form id = "new details" onSubmit ={this.handelSubmit}>
              <label>Enter first Name</label>
              <input type="text" placeholder = "First name" required onChange ={this.handleChangeFirstName}/>
              <label>Enter Last Name</label>
              <input type="text" placeholder = "Last name" required onChange ={this.handleChangeLastName}/>
              <label>Enter email address</label>
              <input type="text" placeholder = "Email" required onChange ={this.handleChangeEmail}/>
              <label>Password:</label>
              <input type="text" placeholder="Password" required value={this.state.RegPassword} onChange={this.handleChangePassword}/>
              <label>Job Role:</label>
              <input type='text' placeholder="Job Role" required value={this.state.RegJobRole} onChange={this.handleChangeJobrole}/>
              <label>Clearence Level:</label>
              <input type="text" placeholder="Clearence Level" required value={this.state.RegClearenceLevel} onChange={this.handleChangeclearenceLevel}/>

              <div id="testdiv"> 
              <div class="button button1">
              <button1 type = "submit">Submit</button1>
              </div>
              </div>
          </form>

    </div>
    );
}
}


export default RegForm;