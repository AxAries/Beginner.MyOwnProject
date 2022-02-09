import "antd/dist/antd.css";
import { Table, Divider, Tag } from "antd";
import { EditOutlined  } from '@ant-design/icons';
import Footer from "../../Components/Footer/Footer";
import { Row, Container } from "react-bootstrap";
import React, { useState, useEffect, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";




export default class Login extends Component {


handleSubmit = e => {
  e.preventDefault();

const data = {
  email:this.email,
  password:this.password
}

axios.post('https://localhost:5001/Login', data)
.then(res =>{
  const token = res.data.token;
  localStorage.setItem('jwtToken', token)
  console.log(token)
})
.catch(err =>{
  console.log(err)
})
console.log(data)



var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "email": this.email,
    "password": this.password
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://localhost:5001/login", requestOptions)
    .then(response => response.text())
    .then(result => {localStorage.setItem('KK', result); 
        console.log(result)})
    .catch(error => console.log('error', error));



console.log("nothing")

alert("Zalogowałeś się" );
window.location.href="/";

};




render()
{

return (

<div>
<section style={{ backgroundColor: "#eee" }}>
  <Container className="justify-content-center align-items-center py-5">
    <Row className="justify-content-around align-items-top">
    <div>
      <div className="Card">
    <div className="Login">
      <h2>Logowanie</h2>
      <Form onSubmit={this.handleSubmit} gap={2}>
        <Form.Group size="lg" controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onChange={e=>this.email= e.target.value}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="mb-5">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={e=>this.password= e.target.value}
          />
        </Form.Group>
        <a href="/StrefaPracodawcy">
        <div className="d-grid gap-2 mb-3">
        <Button size="lg" type="submit" variant="primary"  >
          Login
        </Button>
        
        </div>
        </a>
        <br/>
        <a href="/ChoiceRegister" >
        <p className="NewReg">Zarejestruj się</p>
        </a>
      </Form>
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

}
