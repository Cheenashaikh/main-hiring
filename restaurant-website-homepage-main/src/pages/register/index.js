import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom"

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
      if (res.data.status == 201) {
        history("/")

      } else {
        console.log("error")
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: '#4A90E2', fontWeight: '600' }}>Upload Your Image Here</h1>
      <Form className="p-4 border rounded shadow-lg">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="fw-bold">UserName</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            onChange={setdata}
            className="p-3 border-0 rounded-3 shadow-sm"
            style={{ fontSize: '1rem', borderColor: '#ccc' }}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Select Your Image</Form.Label>
          <Form.Control
            type="file"
            name="photo"
            onChange={setimgfile}
            className="p-3 border-0 rounded-3 shadow-sm"
            style={{ fontSize: '1rem', borderColor: '#ccc' }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={addUserData}
          className="w-100 py-2 mt-3 rounded-pill shadow-sm"
          style={{ backgroundColor: '#4A90E2', border: 'none', fontWeight: '600' }}
        >
          Submit
        </Button>
      </Form>
    </div>

  );
};

export default Register;
