import React, { Component } from "react";
import "./Content.css";
import SwitchToggle from "./SwitchToggle";
//import DeleteModule from './DeleteModule'
import VideoUpload from "./VideoUpload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class VideoManagement extends Component {
  state = {
    videoList: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:7000/api"
    })
      .then(res => {
        this.setState({ videoList: JSON.parse(res.data.body) });
        console.log(this.state.videoList);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <div className="workSection">
          <div className="heading">
            <h1>Video Management</h1>
          </div>
          <div className="formcontainer">
            <VideoUpload />

            <div className="searchEmp">
              <div className="showAttendance">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Video Url</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Thumbnail</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.videoList.map(item => (
                        <tr>
                          <td>{item.videoid}</td>
                          <td>{item.title}</td>
                          <td>
                            <div className="videoContent">
                              {item.description}
                            </div>
                          </td>

                          <td>
                            <div className="videoListimg">
                              <img alt=""
                                src={"data:image/jpg[png];base64," + item.thumb}
                              />
                            </div>
                          </td>
                          <td>
                            <SwitchToggle />
                          </td>
                          <td>
                            <div className="actionbtn">
                              <button
                                title="Edit"
                                type="button"
                                class="btn btn-warning"
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button
                                title="Delete"
                                type="button"
                                class="btn btn-danger"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}

                      {/* <tr>
                        <td>23224343423557</td>
                        <td>My First Video </td>
                        <td>
                          <div className="discriptionDiv">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </div>
                        </td>
                        <td>
                          <div className="thumpSize">
                            <img src={"./videoThumb.jpg"} />
                          </div>
                        </td>
                        <td>
                          <SwitchToggle />
                        </td>
                        <td>
                          <div className="actionbtn">
                            <button
                              title="Edit"
                              type="button"
                              class="btn btn-warning"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                              title="Delete"
                              type="button"
                              class="btn btn-danger"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoManagement;
