import React, { Component } from 'react';
import axios from 'axios';
// import User from '../../UserRestApi/models/user-details.js';
import UserDetails1 from './UserDetails1';


class LoginForm extends Component {
    constructor() {
    super();
    this.state = {
        firstName : '',
        lastName : '',
      
    }
}
handleChange = event =>{
    this.setState({firstName : event.target.value});
    this.setState({lastName : event.target.value});
    

}


handelSubmit = event => {
    event.preventDefault();
    
    // const newuser = new User(
        const newuser = {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
     
    }
    // )
   
    axios.post('http://localhost:4000/api/users', {newuser})
    .then(res =>{
        console.log(res);
        console.log(res.data);

    });

}
    

  render() {
    return (
      <div>
          <UserDetails1 />
    </div>
    );
}
}

export default LoginForm;