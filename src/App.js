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
import SlideMenuBar from './pages/SlideMenuBar';
import Login from './Login/Login'

function App() {
  return (
    <div className="App">
     
      <div className="wrapper">
        <Router>
          <SideMenu/>
          <div className="contentArea">
            <SlideMenuBar/>
            <Switch> 
            <Route path="/login">
                <Login/>
              </Route> 
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
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
