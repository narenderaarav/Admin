import React from 'react';
import './SideMenu.css';
import Content from '../pages/SlideMenuBar';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideMenu() {
    return <React.Fragment>
       
            <nav className="sidebar" id="sidebar">
                <div className="sidebar-header">
                    <h3>VariyasLabs.com</h3>
                </div>

                <ul className="list-unstyled components">
                    {/* <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse"
                          aria-expanded="false" class="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a>Home One</a></li>
                            <li><a>Home One</a></li>
                            <li><a>Home One</a></li>
                        </ul>
                    </li> */}

                    <li>
                    <FontAwesomeIcon icon="coffee" /> <NavLink exact to="/" activeClassName="active">Attendance</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/addmembers" activeClassName="active">Add Members</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/membersList" activeClassName="active">Members List</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/notification" activeClassName="active">Notification</NavLink>
                    </li>
                </ul>
            </nav>
            
            
  
    </React.Fragment>
}

// https://www.techiediaries.com/react-bootstrap/
// https://bootstrapious.com/tutorial/sidebar/index4.html#
// https://github.com/FortAwesome/react-fontawesome


export default SideMenu;
