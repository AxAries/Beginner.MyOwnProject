import "antd/dist/antd.css";
import { Table, Divider, Tag, Button } from "antd";
import { EditOutlined  } from '@ant-design/icons';
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import { Row, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import User from "./Candidates/Users";
import AddUser from './Candidates/AddUser';
import newadd from '../Profiles/Forms/FormEducation';





function Profile(){

const [users, SetUsers] = useState([]);
useEffect(() => {
fetchData();
},[])

const fetchData = async () => {
  await fetch('https://localhost:5001/offers')
  .then((res) => res.json())
  .then((data) => SetUsers(data))
  .catch((err) => {
    console.log(err)
  })
}

const onAdd = async (offerText, city, street,SalaryFrom,SalaryTo, languages) => {
  await fetch("https://localhost:5001/offers", {
    method: "POST",
    body: JSON.stringify({
      offerText: offerText,
      city:city,
      street:street,
      SalaryFrom:SalaryFrom,
      SalaryTo:SalaryTo,
      languages:languages,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      if (res.status !== 201) {
        return;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      SetUsers((users) => [...users, data]);
    })
    .catch((err) => {
      console.log(err);
    });
};


console.log(users)
return (

<div>
<Navbartop />
<section style={{ backgroundColor: "#eee" }}>
  <Container className="justify-content-center align-items-center py-5">
    <Row className="justify-content-around align-items-top">
    <div>
    <AddUser onAdd={onAdd} />

    </div>
    </Row>
  </Container>
</section>
<Footer />
</div>


  );
}

export default Profile