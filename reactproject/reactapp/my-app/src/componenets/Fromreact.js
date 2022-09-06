
import React from 'react';
import ReactDOM from 'react-dom';
import Fromvalidation from './Fromvalidation';

class Fromreact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  name: '',
                  number:null,
                    };

    this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      let name = event.target.name;
      let val = event.target.value;
      this.setState({[name]:val});
   // console.log(this.state);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <span>{this.state.name} {this.state.number}</span>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Roll Nuber:
          <input type="text" name="number" value={this.state.number} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Fromvalidation/>

      </div>
    );
  }
}
  


export default Fromreact;