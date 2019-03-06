import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerError: ' ',
      loginError: '',
      isLoggedIn: '',
      registerFirstName: '',
      registerLastName: '',
      registerEmail: '',
      registerPassword: '',
      registerJobRole: '',
      registerClearenceLevel: '',
      loginEmail: '',
      loginPassword: ''
    };
    
  this.onTextboxChangeRegisterFirstName = (event) => {
    this.setState({
      registerFirstName: event.target.value
    }) 
  }
  this.onTextboxChangeRegisterLastName = (event) => {
     this.setState({
      registerLastName: event.target.value
     }) 
  }
  this.onTextboxChangeRegisterEmail = (event) => {
    this.setState({
      registerEmail: event.target.value
    }) 
  }
  this.onTextboxChangeRegisterPassword = (event) => {
     this.setState({
      registerPassword: event.target.value
     }) 
  }
  this.onTextboxChangeRegisterJobRole = (event) => {
    this.setState({
      registerJobRole: event.target.value
    }) 
  }
  this.onTextboxChangeRegisterClearenceLevel = (event) => {
     this.setState({
      registerClearenceLevel: event.target.value
     }) 
  }
  this.onTextboxChangeLoginEmail = (event) => {
     this.setState({
      loginEmail: event.target.value
     }) 
  }
  this.onTextboxChangeLoginPassword = (event) => {
     this.setState({
      loginPassword: event.target.value
     }) 
  }

 this.onRegister = async () => { 

    const {
      registerFirstName,
      registerLastName,
      registerEmail,
      registerPassword,
      registerJobRole,
      registerClearenceLevel,
    } = this.state;
    await fetch('http://localhost:8000/api/users/register',{
         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
           user: {
             firstName: registerFirstName,
             lastName: registerLastName,
             email: registerEmail,
             password: registerPassword,
             jobRole: registerJobRole,
             clearenceLevel: registerClearenceLevel
           }
         }),
     }).then(res => res.json())
     .then(json => {
      if(json.success == false){
        this.setState({
          registerError: json.message
        })
    }else {
      this.setState({
        registerError: "Registration Successful"
      })
    }
  })
}

  this.onLogin = async () => {
    const {
      loginEmail,
      loginPassword
    } = this.state

    await fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          user: {
            email: loginEmail,
            password: loginPassword
          }
        })
      }).then(res => res.json())
      .then(json => {
        if(json.success == false){
          this.setState({
            loginError: json.message
          })
      }else {
        this.setState({
          loginError: "Login Successful"
        })
      }
    })
  }
}

  render() {
    return (
    <div>
      <div>
        <p>Register</p>
        <label id="registerError">{this.state.registerError}</label><br/>
        <label>First Name:</label>
        <input id="registerField1" type='text' placeholder="First Name" value={this.state.registerFirstName} onChange={this.onTextboxChangeRegisterFirstName}/><br/>
        <label>Last Name:</label>
        <input id="registerField2" type="text" placeholder="Last Name" value={this.state.registerLastName} onChange={this.onTextboxChangeRegisterLastName}/><br/>
        <label>Email:</label>
        <input id="registerField3" type='text' placeholder="Email" value={this.state.registerEmail} onChange={this.onTextboxChangeRegisterEmail}/><br/>
        <label>Password:</label>
        <input id="registerField4" type="text" placeholder="Password" value={this.state.registerPassword} onChange={this.onTextboxChangeRegisterPassword}/><br/>
        <label>Job Role:</label>
        <input id="registerField5" type='text' placeholder="Job Role" value={this.state.registerJobRole} onChange={this.onTextboxChangeRegisterJobRole}/><br/>
        <label>Clearence Level:</label>
        <input id="registerField6" type="text" placeholder="Clearence Level" value={this.state.registerClearenceLevel} onChange={this.onTextboxChangeRegisterClearenceLevel}/><br/>
        <button id="registerButton" onClick={this.onRegister}>Register</button>
      </div>
      <div>
        <p>Login</p>
        <label>{this.state.loginError}</label><br/>
        <label>Email:</label>
        <input id="loginField1" type="text" placeholder="Email" value={this.state.loginEmail} onChange={this.onTextboxChangeLoginEmail}/><br/>
        <label>Password:</label>
        <input id="loginField2" type="password" placeholder="Password" value={this.state.loginPassword} onChange={this.onTextboxChangeLoginPassword}/><br/>
      </div>
      <button id="loginButton" onClick={this.onLogin}>Login</button>
    </div>
    );
  }
}

export default Login;