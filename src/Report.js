import React, { Component } from "react";
import ReactToPrint from 'react-to-print';
import Level from './Level.js'
import Barchart from './Barchart.js'


class Report extends Component {
    render() {
return (
    
    <div>
    <center><h1><b>REPORT</b></h1></center>

<div class="center">


<center><Level /></center>
    <p></p>
     <h2>Total Word count: 45 </h2>
     <p></p>
     <h2>Security Clearance:</h2>
     <p></p>
     <h2>Severity:</h2>
    <p></p>
    
    <p></p>
     <h2>Sucessful Uploads: 20</h2>
     <h2>Unsucessful Uploads: 8</h2>
     <h2>Pending Transactions: 45</h2>
     <p></p>
     <p></p>

     <h1>Contact Details</h1>
     <h2>Name:</h2>
     <h2>Address:</h2>
     <h2>Email:</h2>
<Barchart />
   </div>
   
     </div>
     
    );
  }
}
 
class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">PRINT</a>}
          content={() => this.componentRef}
        />
        <Report ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Print;




