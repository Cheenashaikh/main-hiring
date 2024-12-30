import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    setFName(e.target.value);
  };

  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    // Correctly instantiate FormData
    const formData = new FormData();
    formData.append("photo", file); // Removed the unnecessary `=` symbol
    formData.append("fname", fname);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post("/register", formData, config);
      if(res.data.status == 201){
         history("/")

      }else{
        console.log("error")
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="container mt-3">
      <h1>Upload your Img Here</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" name="fname" onChange={setdata} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select your Image</Form.Label>
          <Form.Control type="file" name="photo" onChange={setimgfile} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={addUserData}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
