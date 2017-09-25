import React, { Component } from 'react';
import {Link} from 'react-router';

export class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "Alex Kesler",
          designation: "Software Architect",
          project: "URR"
        },
        {
          name: "Raghu Shah",
          designation: "Software Engineer",
          project: "SHU"
        },
        {
          name: "Kim Lee",
          designation: "Intern",
          project: "URR"
        },
        {
          name: "Joe Walsh",
          designation: "Manager",
          project: "SHU"
        },
        {
          name: "Christine Sam",
          designation: "QA Engineer",
          project: "FHD"
        },
        {
          name: "Tim Asermeley",
          designation: "UX Designer",
          project: "FHD"
        },
        {
          name: "Raji Sinha",
          designation: "Tech Lead",
          project: "SHU"
        }
      ]
    };
  }
  
  render() {
    let jsx =<div style={{width:"100%"}}> <table style={{ display: "inline-table",textAlign:"center",width:"100%" }}>
    
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>Name</th>
          <th style={{textAlign:"center"}}>Designation</th>
          <th style={{textAlign:"center"}}>Project</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.employees.map(function (employee) {
            return <tr key={employee.name}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.project}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div>;
 
    return jsx;
  }
}
export default ListView;