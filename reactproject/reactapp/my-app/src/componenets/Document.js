
import React from 'react';
import ReactDOM from 'react-dom';

class Document extends React.Component {

  constructor() {
    super();
    this.state = {color: "red"};
    console.dir(this.state);
  }
  render() {
    return  <div>
    <span>Document</span>
    </div> 
  }
  
}

export default Document;