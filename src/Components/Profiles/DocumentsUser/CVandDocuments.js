import React from "react";
import { Row, Container } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Navbartop from "../../Navbar/Navbartop";
import './CVandDocumentsPlate.css';
import Form from "react-jsonschema-form";
import applyNavs from "react-jsonschema-form-pagination";
import CoursesPage from "./Courses";
import CV from "./CV";
import Documents from "./Documents";



let FormWithNavs = applyNavs(Form);

class FormWithNavsUpdate extends FormWithNavs {
  shouldComponentUpdate = () => {
    return true;
  };
}

FormWithNavs = FormWithNavsUpdate;



export default function NewPage(){
 


return (
    <>
      <Navbartop />
      <section style={{ backgroundColor: "#eee" }}>
        <Container className="justify-content-center align-items-center py-5">
          <Row className="justify-content-around align-items-top">
            <div className="Documents_Section">
              <div className="Documents_Wrapper">
                <h1 className="Documents_Heading">
                Dokumenty
                  <div className="Documents_Container">
                    <div className="Documents_Background">
                      <div className="Documents_Card-Position">
                        <div className="Documents_Card">
                          <h1>CV</h1>
                          <div className="Documents_Card-Appearance">
                              <div className="Documents_Card-File">
                              Tutaj będą wczytywane pliki
                            </div>
                            <div className="Documents_Card-Send-File">
                              <CV title={"SendFile"} />
                            </div>
                          </div>  
                          </div>
                        <div className="Documents_Card">
                        <h1>Kursy</h1>
                          <div className="Documents_Card-Appearance">
                            <div className="Documents_Card-File">
                              Tutaj będą wczytywane pliki
                            </div>
                            <div className="Documents_Card-Send-File">
                              <CoursesPage title={"SendFile"} />
                            </div>
                          </div>
                        </div>
                        <div className="Documents_Card">
                        <h1>Inne dokumenty</h1>
                          <div className="Documents_Card-Appearance">
                            <div className="Documents_Card-File">
                              Tutaj będą wczytywane pliki
                            </div>
                            <div className="Documents_Card-Send-File">
                              <Documents title={"SendFile"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );

}