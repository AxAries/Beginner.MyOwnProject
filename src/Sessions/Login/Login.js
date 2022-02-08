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
localStorage.setItem('email', this.email)

alert("Twoje dane zostały wysłane" );


};



render()
{

return (

<div>
<section style={{ backgroundColor: "#eee" }}>
  <Container className="justify-content-center align-items-center py-5">
    <Row className="justify-content-around align-items-top">
    <div>
    <div className="Login">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onChange={e=>this.email= e.target.value}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={e=>this.password= e.target.value}
          />
        </Form.Group>
        <a href="/StrefaPracodawcy">
        <Button block size="lg" type="submit" >
          Login
        </Button>
        </a>
      </Form>
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
