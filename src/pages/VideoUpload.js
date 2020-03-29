import React from "react";
import axios from "axios";
import {  Row, Col } from "react-bootstrap";
import './Content.css';
function VideoUpload() {
const [form, setForm] = React.useState({ 
  title:"",
  description:"",
  file: null
})

function handleChange(event){
  const {name, files, value} = event.target  
  const inputValue = name === 'file' ? files[0] : value
  setForm({
    ...form,
    [name]: inputValue
  })
}

function handleSubmit(event){
  event.preventDefault();
  const videoData = new FormData()
  videoData.append("videoFile",form.file)
  videoData.append("title",form.title)
  videoData.append("description",form.description)
  axios.post('http://localhost:9000/upload',videoData)
  .then(response => {
    console.log(response.data)
  })
  //console.log({ form });
}

  return (
    
     <>
     <Row className="justify-content-md-center">
    <Col lg="6">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          
          <input
            autoComplete="off"
            className="form-control"
            name="title"
            placeholder="Title"
            onChange = {handleChange}
          />
         
        </div>
        <div className="form-group">
       
          <textarea
            autoComplete="off"
            className="form-control"
            name="description"
            placeholder="Description"
            onChange = {handleChange}
          />
          
        </div>
        <div>
          <input
            className="custom-file-input"
            name="file"
            type="file"
            alt=""
            accept="video/mp4"
            onChange = {handleChange}
          />
        </div>

        <div className="chooseVideo">
          <input
            className="custom-file-input"
            name="file"
            type="file"
            accept="video/mp4"
            onChange = {handleChange}
          />
        </div>

       
        
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
      </Col>
      </Row>
      </>
  );
}

export default VideoUpload;