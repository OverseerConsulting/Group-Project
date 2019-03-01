import React, { Component } from 'react';

class UserDetails extends Component {
  render() {
    return (
       <div id = "new-user-container">
          <form id = "new details" onSubmit ={this.submit}>
              <label>Enter first Name</label>
              <input type="text" placeholder = "First name" required onChange ={this.firstname}/>
              <label>Enter Last Name</label>
              <input type="text" placeholder = "Last name" required onChange ={this.lastname}/>
              <label>Enter email address</label>
              <input type="text" placeholder = "Email" required onChange ={this.email}/>
              <label>Password:</label>
              <input type="text" placeholder="Password" required onChange={this.password}/>
              <label>Job Role:</label>
              <input type='text' placeholder="Job Role" required onChange={this.jobrole}/>
              <label>Clearence Level:</label>
              <input type="text" placeholder="Clearence Level" required  onChange={this.clearance}/>
                

              <button type = "submit">Submit</button>
          </form>

    </div>
    );
}
}
export default UserDetails;
