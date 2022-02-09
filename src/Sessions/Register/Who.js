import "antd/dist/antd.css";
import Footer from "../../Components/Footer/Footer";
import { Row, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import './Whocss.css';
import photo1 from './761602.png';
import photo2 from './4-5121.png';
import Navbartop from "../../Components/Navbar/Navbartop";


function Profile(){
   

return (
   <div>
       <Navbartop/>
       <section style={{ backgroundColor: "#eee" }}>
  <Container className="justify-content-center align-items-center py-5">
    <Row className="justify-content-around align-items-top">
            
            <div className="CardWho">
            <a href="/Register">
            <h1>Pracobiorca</h1>
            <img className="Imagecss" src={photo2} alt="logo" />
            <p>Zarejestruj się żeby móc aplikować</p>
            </a>
            </div>
            <div className="CardWho">
            <a href="/RegisterEmployer">
            <h1>Pracodawca</h1>
            <img className="Imagecss" src={photo1} alt="logo" />
            <p>Zarejestruj się żeby móc dodawać oferty</p>
            </a>
            </div>
      </Row>
  </Container>
</section>
<Footer />
   </div>
  );
}

export default Profile;