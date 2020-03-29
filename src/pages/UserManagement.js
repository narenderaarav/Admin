import React, { Component } from "react";
import "./Content.css";
import SwitchToggle from "./SwitchToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import PopModal from "./PopModal"
import { fdatasync } from "fs";

class UserManagement extends Component{
 state ={
   userDetails: []
 };
 

 componentDidMount() {
  axios.get('http://localhost:4000/users')

    .then(res => {
      //JSON.parse(res.data)
      // console.log("data: --- ", res.data.map(item =>  console.log(item)));
      this.setState({ userDetails:res.data });
    }) 
    
    .catch((err) =>{
      console.log("There is an error in API call.", err)
    })
}


  render() {
    return(
      <>
      <div className="workSection">
        <div className="heading">
          <h1>User Management</h1>
          
        </div>
        <div className="showAttendance">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userDetails.map(item =>(
                     <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                          <div className="statustoggle">
                            <SwitchToggle />
                          </div>
                        </td>
                        <td>
                          <div className="actionbtn">
                              <PopModal/>
                          </div>
                        </td>
                   </tr>
                   

              ))}
           
            </tbody>
          </table>
        </div>
        <div className="adminSection">
          <div className="heading2">
            <h2>Create Admin Users</h2>
          </div>
        <div className="userAdmin">
          <Form>
          <Row className="justify-content-md-center">
            
            <Col lg="6">
            <div className="form-group">
             <input 
                type="text" 
                className="form-control" 
                placeholder="User Name" />
            </div>
            <div className="form-group">
             <input 
                type="text" 
                className="form-control" 
                placeholder="Email Id" />
            </div>
            <div className="form-group">
             <input 
                type="password" 
                className="form-control" 
                placeholder="Password" />
            </div>
            <div className="form-group">
            <button type="button" className="btn btn-primary">Submit</button>
            </div>
            </Col>
         
          </Row>
          </Form>
          </div>

          <div className="userAdminTable">
          <table className="table">
    <thead>
      <tr>
        <th>User Name</th>
        <th>Email Id</th>
        <th>Password</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>john@gmail.com</td>
        <td>1234567</td>
        <td>
        <div className="statustoggle">
            <SwitchToggle />
        </div>
        </td>
        <td>
        <div className="actionbtn">
        <PopModal/>
                  </div>
        </td>
      </tr>
      
      
    </tbody>
  </table>
          </div>

        </div>
      </div>
    </>
    )
  }

}


export default UserManagement;
