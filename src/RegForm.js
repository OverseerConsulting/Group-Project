import React, { Component } from 'react';
import axios from 'axios';
// import User from '../../UserRestApi/models/user-details.js';
import UserDetails from './UserDetails';


class RegForm extends Component {
    constructor() {
    super();
    this.state = {
        firstName : '',
        lastName : '',
        email : ''    
    }
}
handleChange = event =>{
    this.setState({firstName : event.target.value});
    this.setState({lastName : event.target.value});
    this.setState({email : event.target.value});

}


handelSubmit = event => {
    event.preventDefault();
    
    // const newuser = new User(
        const newuser = {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        email : this.state.email
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
          <UserDetails />
    </div>
    );
}
}

export default RegForm;