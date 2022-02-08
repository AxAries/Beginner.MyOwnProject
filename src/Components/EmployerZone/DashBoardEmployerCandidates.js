import "antd/dist/antd.css";
import { Table, Divider, Tag, Button } from "antd";
import { EditOutlined  } from '@ant-design/icons';
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import { Row, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import User from "./Candidates/Users";
import AddUser from './Candidates/AddUser';




  





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

const onAdd = async (offerText, city, street,SalaryFrom,SalaryTo) => {
  await fetch("https://localhost:5001/offers", {
    method: "POST",
    body: JSON.stringify({
      offerText: offerText,
      city:city,
      street:street,
      SalaryFrom:SalaryFrom,
      SalaryTo:SalaryTo,
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
    <div>
          <div className="Myn">
          <h1>
            Kandydaci
            </h1>
            </div>
      <table class="blueTable">
          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Miasto</th>
              <th>Ulica</th>
              <th>Języki</th>
              <th>Działanie</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colspan="7">
                <div class="links"><a href="#">&laquo;</a> <a class="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
              </td>
            </tr>
          </tfoot>
        <tbody>
        {users.map((user) => (
          <tr>
           <td><a href="/StrefaPracodawcy-kandydaci">{user.offerText}</a></td>
            <td>{user.city}</td>
            <td>{user.street}</td>
            <td>{user.languages}</td>
            <td>
              
              <span>
                <Button className="But" type="primary" icon={<EditOutlined />} value="large" >
                Edytuj
               </Button>
               <div className="cc">
               </div>
               <Button className="But" type="primary" icon={<EditOutlined />} value="large" >
                Usuń
               </Button>
              </span>
            </td>
          </tr>
          ))}
        </tbody>
      </table>




        </div>
    </div>
    </Row>
  </Container>
</section>
<Footer />
</div>


  );
}

export default Profile