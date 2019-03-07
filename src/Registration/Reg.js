import React, { Component } from "react";
import RegForm from './RegForm.js'
 
class Reg extends Component {
  render() {
    return (
        <div>

<div id = "registration">
    <h1>Registration</h1>
    <div id = "newUser"></div>
</div> 
<div>
  <RegForm />
</div>     
</div>
    );
  }
}
 
export default Reg;