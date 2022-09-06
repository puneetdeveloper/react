
import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {color: "red"};
    console.dir(this.state);
  }
  render() {
    return  <div>
    <span>Home</span>
    </div> 
  }
  
}

export default Home;