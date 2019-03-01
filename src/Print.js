import React from 'react';
import ReactToPrint from 'react-to-print';
 
class ComponentToPrint extends React.Component {
  render() {
    return (
        <div>
        <center><h1><b>Report</b></h1></center>
    
    <div class="center">
    
        <center><h2>THREAT LEVEL : VERY HIGH</h2></center>
        
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
         </div>
   
   </div>
   
    
    
    );
  }
}
 
class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example