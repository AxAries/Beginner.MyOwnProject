import React from "react";
import Form from "react-jsonschema-form";
import applyNavs from "react-jsonschema-form-pagination";
import "../Forms.css";
import Navbartop from "../../Navbar/Navbartop";
import Footer from "../../Footer/Footer";
import { Row, Container } from "react-bootstrap";

let FormWithNavs = applyNavs(Form);

class FormWithNavsUpdate extends FormWithNavs {
  shouldComponentUpdate = () => {
    return true;
  };
}

FormWithNavs = FormWithNavsUpdate;

const schema = {
  type: "object",
  properties: {
    Company:
      {
        title:"Wykształcenie",
        type: "array",
        items:
          {
          type: "object",
          properties:
            {
            TitleCompany: {title:"Nazwa firmy", type: "string" },
            DataStart: {title:"Czas rozpoczęcia", type: "string", format: "date" },
            DataEnd: {title:"Czas zakończenia", type: "string", format: "date" },
            Positions: {title:"Stanowisko", type: "string" },
            Description: {title:"Opis", type: "string", format: "textarea" },
            }
          }
      }
  }
};

const uiSchema = {
  Company: {
    classNames: "Company"
  }
 
};

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = formData => {
    this.setState({ submitting: true });
    setTimeout(() => this.setState({ submitting: false, saved: true }), 1000);
  };

  render = () => (
    <>
    <Navbartop />
    <section style={{ backgroundColor: "#eee" }}>
    <div className="foreground">
    
    <Container className="justify-content-center align-items-center py-5">
    <Row className="justify-content-around align-items-top">
    <h1 id="main">Doświadczenie</h1>
      <FormWithNavs
        schema={schema}
        uiSchema={uiSchema}
        disabled={this.state.submitting}
        onSubmit={this.submit}
        formData={this.state.formData || { TitleCompany: "Firma" }}
        onChange={({ formData }) => {
          this.setState({ formData, saved: false });
        }}
      >
        <div className="ss">
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          disabled={this.state.submitting || this.state.saved}
        >
          {this.state.saved ? "Zapisane" : "Zapisz"}
        </button>
        </div>
      </FormWithNavs>
      {this.state.submitting && <small>Submitting...</small>}
      </Row>
      </Container>
      </div>
    
    </section>
    <Footer />
</>
  );
}

