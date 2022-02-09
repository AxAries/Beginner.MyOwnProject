import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { Table, Divider, Tag, Button, } from "antd";
import { EditOutlined,PlusOutlined  } from '@ant-design/icons';
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import Card from "./card";
import "./dashboard.css";




function Dash(){
   
   const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://localhost:5001/offers")
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((e) => console.error(e));
    }, []);

    


return (
    <div>
    <Navbartop />
    <section style={{ backgroundColor: "#eee" }}>
      <Container className="justify-content-center align-items-center py-5">
        <Row className="justify-content-around align-items-top">
        <div className="Column">
        <div className="my-5">
      </div>
      <div className="container ">
        <div className="row ">
          <div className="col-12 mx-auto">
            <div className="row gy-4">
              {users.map((user) => {
                return (
                  <Card
                    title={user.offerText}
                    city={user.city}
                    salaryFrom={user.salaryFrom}
                    salaryTo={user.salaryTo}
                  />
                );
              })}
              
            </div>
          </div>
        </div>
      </div>
    </div>
        </Row>
      </Container>
    </section>
    <Footer />
    </div>
  );
}

export default Dash