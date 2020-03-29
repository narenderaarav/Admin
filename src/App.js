import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SideMenu from './SideMenu/SideMenu';
import VideoManagment from './pages/VideoManagment';
import UserManagement from './pages/UserManagement';
import MembersList from './pages/MembersList';
import Notification from './pages/Notification';
import SlideMenuBar from './pages/SlideMenuBar';
import Login from './Login/Login'
class App extends Component {
  // state = {
  //   authenticated: false
  // }

  constructor(props){
    super(props)
    var value = sessionStorage.getItem("authenticated");
    value = value != null ? JSON.parse(value) : false;
    this.state = {authenticated: value};
  }

  onLoggedIn = () => {
    sessionStorage.setItem("authenticated", "true");
    this.setState({authenticated: true});
  }

  render() {
    if (this.state.authenticated) {
      return (<div className="App">
      <div className="wrapper">
        <Router>
          <SideMenu />
          <div className="contentArea">
            <SlideMenuBar />
            <Switch>
              <Route path="/notification">
                <Notification />
              </Route>
              <Route path="/userManagement">
                <UserManagement />
              </Route>
              <Route path="/membersList">
                <MembersList />
              </Route>
              <Route path="/">
                <VideoManagment />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>)
    }else{
      return(<Login onLoggedIn1={this.onLoggedIn}/>)
    }
  }
}

export default App;