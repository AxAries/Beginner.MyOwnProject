import React from "react";
import Form from "react-jsonschema-form";
import applyNavs from "react-jsonschema-form-pagination";
import Navbartop from "../../Navbar/Navbartop";
import Footer from "../../Footer/Footer";
import { Row, Container } from "react-bootstrap";
import "../Forms.css";
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
    Education: {
      title:"Wykształcenie",
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {title:"Nazwa szkoły", type: "string" },
          LevelOfEducation: {title:"Poziom wykształcenia ",  type: "string", anyOf: [
            {
              type: "string",
              title: "Podstawowe",
              enum: ["Podstawowe"]
            },
            {
              type: "string",
              title: "Zawodowe",
              enum: ["Zawodowe"]
            },
            {
              type: "string",
              title: "Średnie",
              enum: ["Srednie"]
            },
            {
              type: "string",
              title: "Licencjat",
              enum: ["Licencjat"]
            },
            {
              type: "string",
              title: "Inżynier",
              enum: ["Inzynier"]
            },
            {
              type: "string",
              title: "Magister",
              enum: ["Magister"]
            },
            {
              type: "string",
              title: "Magister inżynier",
              enum: ["MagisterInzynier"]
            },
            {
              type: "string",
              title: "Studia podyplomowe",
              enum: ["StudiaPodyplomowe"]
            },
            {
              type: "string",
              title: "Doktorat",
              enum: ["Doktorat"]
            },
            {
              type: "string",
              title: "Doktorat hab.",
              enum: ["DoktoratHab"]
            },
            {
              type: "string",
              title: "Profesor",
              enum: ["Profesor"]
            },
          ] 
        },
          Profesion: {title:"Specjalizacja ",  type: "string"},
          DateSchool: {title:"",  type: "string", format: "date", 
          type: "object",
          properties: {
            "Czy twoja edukacja nadal trwa?": {
              type: "string",
              enum: ["Nie", "Tak"],
              default: "Nie"
            }
          },
          required: ["Czy twoja edukacja nadal trwa?"],
          dependencies: {
            "Czy twoja edukacja nadal trwa?": {
              oneOf: [
                {
                  properties: {
                    "Czy twoja edukacja nadal trwa?": {
                      enum: ["Nie"]
                    },
                    DataSchoolStart: {title:"Data rozpoczęcia",
                      type: "string", format: "date"
                    },
                    DataSchoolEnd: {title:"Data zakończenia",
                      type: "string", format: "date"
                    }
                  }
                },
                {
                  properties: {
                    "Czy twoja edukacja nadal trwa?": {
                      enum: ["Tak"]
                    },
                    DataSchoolStart: {title:"Data rozpoczęcia",
                      type: "string", format: "date"
                    }
                  }
                },  
              ]
            }
          }
        },

          
          
        }

        

      }
    }
  }
};

const uiSchema = {
  Education: {
    classNames: "Education"
  },
  
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
    <h1 id="main">Wykształcenie</h1>
      <FormWithNavs
        schema={schema}
        uiSchema={uiSchema}
        disabled={this.state.submitting}
        onSubmit={this.submit}
        formData={this.state.formData}
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
