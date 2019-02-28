import React, { Component } from 'react';

class UserDetails extends Component {
  render() {
    return (
      <div id = "new-user-container">
          <form id = "new details" onSubmit ={this.handelSubmit}>
              <label>Enter first Name</label>
              <input type="text" placeholder = "First name" required onChange ={this.handleChange}/>
              <label>Enter Last Name</label>
              <input type="text" placeholder = "Last name" required onChange ={this.handleChange}/>
              <label>Enter email address</label>
              <input type="text" placeholder = "Email" required onChange ={this.handleChange}/>

              <button type = "submit">Submit</button>
          </form>

    </div>
    );
}
}
export default UserDetails;
