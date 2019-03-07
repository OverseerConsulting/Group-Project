import React from 'react';
import ReactToPrint from 'react-to-print';
import WordCount from './WordCount.js'
import Score from './Score.js'
import Doc from './Doc.js'
import FlaggedWC from './FlaggedWC.js'
import FlaggedP from './FlaggedP.js'
import Status from './Status.js'
import Rank from './Rank.js'
import Words1 from './Words1.js'
import { FaPrint } from 'react-icons/fa';
import Chart from '../Chart';
import FullReport from './fullReport.js';


class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <FullReport />
      </div>



    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
         
        <ReactToPrint
  
          trigger={() => <button1 class="button1" href="#">Print <FaPrint /></button1>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
     
    );
  }
}

export default Example