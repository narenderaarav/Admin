import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SideMenu from './SideMenu/SideMenu';
import Attendance from './pages/Attendance';
import AddMembers from './pages/AddMembers';
import MembersList from './pages/MembersList';
import Notification from './pages/Notification';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Router>
      <SideMenu/>
        <Switch>
          
        <Route path="/notification">
            <Notification/>
          </Route>
          <Route path="/addmembers">
            <AddMembers/>
          </Route>
          <Route path="/membersList">
            <MembersList/>
          </Route>
          <Route path="/">
            <Attendance/>
          </Route>
          
        </Switch>
         
      </Router>
     
    </div>
    </div>
  );
}

export default App;
