
import React from 'react';
import ReactDOM from 'react-dom';

class APIcall extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {color: "red"};
    // console.dir(this.state);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
  }
  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.employee_name}
              {item.employee_salary} 
 
            </li>
          ))}
        </ul>
      );
    }
  }
  }
  


export default APIcall;