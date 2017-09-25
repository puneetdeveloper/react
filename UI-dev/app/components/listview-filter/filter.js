import React from 'react';
{/*import  ListView  from './listview/listview';*/}
import  ListView  from './listview/listview';

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "name",
      value: ""
    };
    this.filter = this.filter.bind(this);
    this.setField = this.setField.bind(this);
  }
  render() {
    let jsx = <div>
      <div>Field: 
        Name
        Designation
        Project
      </div>
      <div>Value: </div>
      <ListView field={this.state.field} value={this.state.value} />
    </div>;
    return (
      jsx
    );
  }
  setField(event) {
    this.setState({ field: event.target.value });
  }
  filter(event) {
    this.setState({ value: event.target.value });
  }
}