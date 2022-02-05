import React from "react";
import Form from "react-jsonschema-form";
import applyNavs from "react-jsonschema-form-pagination";
import "./ForDocuments.css";
import Button from '@mui/material/Button';
import { FiArrowRight } from "react-icons/fi";


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
      Courses: {title:"Dokumenty", type: "string", format: "data-url" },
    }
  };

  const uiSchema = {
    Courses: {
      classNames: "File"
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

      

        <div className="Background">
          
        <FormWithNavs className="Position"
          schema={schema}
          uiSchema={uiSchema}
          disabled={this.state.submitting}
          onSubmit={this.submit}
          formData={this.state.formData}
          onChange={({ formData }) => {
            this.setState({ formData, saved: false });
          }}
        >
          <div className="button">
          <Button type="submit" variant="contained" endIcon={<FiArrowRight />} disabled={this.state.submitting || this.state.saved}>
            {this.state.saved ? "Wysłane" : "Wyślij"}
          </Button>
          </div>
        </FormWithNavs>
        </div>
        {this.state.submitting && <small>Przesyłanie...</small>}


  </>
    );
  }