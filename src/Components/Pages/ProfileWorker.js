import React from "react";
import { Row, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import DashboardWorker from "../Profiles/Worker/DashboardWorker";




export default function NewPage(){
 


return (
    <>
      <Navbartop />
      <section style={{ backgroundColor: "#eee" }}>
        <Container className="justify-content-center align-items-center py-5">
          <Row className="justify-content-around align-items-top">
            <DashboardWorker title={"Profil Uzytkownika"} />
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );

}

