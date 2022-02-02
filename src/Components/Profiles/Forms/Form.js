import React from "react";
import Form from "react-jsonschema-form";

import { schema } from "./schema";

class JSONSchemaForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ formData }) {
    const { handleSubmit } = this.props;
    handleSubmit(formData);
  }

  render() {
    return <Form schema={schema} onSubmit={this.handleSubmit} />;
  }
}

export default JSONSchemaForm;
