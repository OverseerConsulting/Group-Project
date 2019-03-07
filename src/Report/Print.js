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


class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <center><h1><b>REPORT</b></h1></center>


        <div class="center">

          <Doc />
          <WordCount />
          <Score />
          <FlaggedWC />
          <FlaggedP />
          <Status />
          <Rank />
          <br></br>
          <center><h3><b>Word count Chart</b></h3></center>
          <br></br>
          <Words1 />
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
          trigger={() => <button href="#">Print <FaPrint /></button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example