import "antd/dist/antd.css";
import Footer from "../../Components/Footer/Footer";
import { Row, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import AddUser from './Register';
import './reg.css';



function Profile(){

const [users, SetUsers] = useState([]);
useEffect(() => {
    onAdd();
    },[])
    

const onAdd = async (name, surname, email,phone_number,passwordHash) => {

    

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("surname", surname);
    formdata.append("email", email);
    formdata.append("phonenumber", phone_number);
    formdata.append("password", passwordHash);
    formdata.append("confirmpassword", passwordHash);
    formdata.append("NIP", "");
    formdata.append("RoleId", "1");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://localhost:5001/Register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

     
};




return (

<div>
<section style={{ backgroundColor: "#eee" }}>
  <Container className="justify-content-center align-items-center py-5">
    <Row className="justify-content-around align-items-top">

    <AddUser onAdd={onAdd} />

    </Row>
  </Container>
</section>
<Footer />
</div>


  );
}

export default Profile