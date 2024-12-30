import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import moment from "moment";
import Alert from 'react-bootstrap/Alert';

const HireMe = () => {

    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);


    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status == 201) {
            console.log("data get");
            setData(res.data.data);
        } else {
            console.log("error");
        }
    }



    const dltUser = async (id) => {
        console.log(id)
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            getUserData()
            setShow(true)
        } else {
            console.log("error")
        }
    }



    useEffect(() => {
        getUserData();
    }, [])

    return (
        <>
            {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    User Delete
                </Alert> : ""
            }
            <div className="container mt-2">
                <h4 className="text-center mt-0 text-uppercase font-weight-bold text-dark bg-light shadow-sm rounded py-3 px-5" style={{ marginTop: '-30px', letterSpacing: '3px', fontSize: '1.7rem' }}>Hire Me</h4>

                <div className="text-end">
                    <Button variant="secondary" className="d-flex align-items-center justify-content-center rounded-pill shadow-lg px-4 py-2"><NavLink to="/register" className="text-decoration-none text-light fw-bold" style={{ letterSpacing: '1px', fontSize: '1rem' }}>Add User</NavLink></Button>

                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    {
                        data.length > 0 ? data.map((el, i) => {
                            return (
                                <>
                                    <Card style={{ width: '22rem', height: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }} className="mb-3" key={i}>
                                        <Card.Img
                                            variant="top"
                                            src={`/uploads/${el.userimg}`}
                                            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', textAlign: "center", margin: "10px auto" }}
                                            className="mt-2"
                                        />
                                        <Card.Body className='text-center'>
                                            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>UserName: {el.username}</Card.Title>
                                            <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
                                                Date Added : {moment(el.date).format("DD-MM-YYYY")}
                                            </Card.Text>
                                            <Button
                                                variant="danger"
                                                onClick={() => dltUser(el.id)}
                                                className="col-lg-6 text-center"
                                                style={{ borderRadius: '20px' }}
                                            >
                                                Delete
                                            </Button>
                                        </Card.Body>
                                    </Card>

                                </>
                            )
                        }) : ""
                    }
                </div>
            </div>
        </>
    )
}

export default HireMe;
