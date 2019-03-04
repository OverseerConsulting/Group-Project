import React, { Component } from 'react';
import Apphead from './page/head';
import Appbody from './page/body';

class RegPage extends Component {
 render() {
    return (
      <div>
        <div>
          <Apphead />
        </div>
        <div>
          <Appbody />
        </div>       
      </div>
    );
}
}


export default RegPage;