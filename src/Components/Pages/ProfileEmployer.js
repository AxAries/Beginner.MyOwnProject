import React from "react";
import { Row, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import DashboardEmployer from "../Profiles/Employer/DashboardEmployer";





export default function NewPage(){
 


  return (
      <>
        <Navbartop />
        <section style={{ backgroundColor: "#eee" }}>
          <Container className="justify-content-center align-items-center py-5">
            <Row className="justify-content-around align-items-top">
              <DashboardEmployer title={"ProfilUzytkownikaPracodawca"} />
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
  
  }
  