import React, { Component } from 'react';
import RegForm from '../forms/registration-form';


class Appbody extends Component {
  render() {
    return (
      <div>
        <h1 className = "title" >Registration</h1>
        <div id = "registration">
            <h1>Overseer Registration</h1>
            <div id = "newUser"></div>
        </div> 
        <div>
          <RegForm />
        </div>     
    </div>
    );
}
}

export default Appbody;