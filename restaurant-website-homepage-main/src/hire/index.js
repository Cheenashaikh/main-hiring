import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import moment from "moment";

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
        <div className="container mt-2">
            <h4 className="text-center mt-2">Hire Me</h4>
            <div className="text-end">
                <Button variant="secondary">
                    <NavLink to="/register" className="text-decoration-none text-light">Add User</NavLink>
                </Button>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5">
                {
                    data.length > 0 ? data.map((el, i) => {
                        return (
                            <>
                            <Card style={{ width: '22rem', height: '18rem' }} className="mb-3" key={i}>
                                <Card.Img variant="top" src={`/uploads/${el.userimg}`} style={{ width: '100px', textAlign: "center", margin: "auto" }} className="mt-2" />
                                <Card.Body className='text-center'>
                                    <Card.Title>UserName: {el.username}</Card.Title>
                                    <Card.Text>
                                        Date Added : {moment(el.date).format("DD-MM-YYYY")}
                                    </Card.Text>
                                    <Button variant="danger" onClick={() => dltUser(el.id)} className="col-lg-6 text-center">Delete</Button>
                                </Card.Body>
                            </Card>
                            </>
                        )
                    }):""
                }
            </div>
        </div>
    )
}

export default HireMe;
