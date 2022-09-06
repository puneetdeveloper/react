
import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Communication from './Communication';
import Home from './Home';
import Document from './Document';
import APIcall from './APIcall';
import Fromreact from './Fromreact';



class Header extends React.Component {
   name = "puneet singh";

  constructor() {
    super();
    this.state = {color: "red"};
    console.dir(this.state);
  }
  render() {
    return  <Router>
    <div>
        <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/commnication">Communication</Link>
        </li>
        <li>
          <Link to="/document">Documents</Link>
        </li>
        <li>
          <Link to="/api">API CAll</Link>
        </li>
        <li>
          <Link to="/from">from</Link>
        </li>
      </ul>

      <Switch>
        {/* <Route path="/:id"  children={<Child />}/> */}
        <Route exact path="/commnication">
            <Communication />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/document">
            <Document />
          </Route>
          <Route exact path="/api">
            <APIcall />
          </Route>
          <Route exact path="/from">
            <Fromreact />
          </Route>
      </Switch>
    </div>
  </Router> ;
  }
  
}
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
export default Header;