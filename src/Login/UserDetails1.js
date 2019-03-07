import React, { Component } from 'react';

class UserDetails1 extends Component {
  render() {
    return (
      <div id = "new-user-container">
          <form id = "new details" onSubmit ={this.handelSubmit}>
              <label>User Name</label>
              <input type="text" placeholder = "User name" required onChange ={this.handleChange}/>
              <label>Password</label>
              <input type="text" placeholder = "Password" required onChange ={this.handleChange}/>
              
              <div class="button button1">
              <center><button1 type = "submit">Login</button1></center>
              </div>
          </form>

    </div>
    
    );
}
}
export default UserDetails1;