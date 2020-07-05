import * as React from "react";
import { Form, Button } from "react-bootstrap";

export interface FormCustomProps {}

const FormCustom: React.SFC<FormCustomProps> = () => {
  let name = "noor";
  let email = "";

  function formSubmitted(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(e);
    console.log(e.target);
  }
  return (
    <div>
      <Form onSubmit={formSubmitted}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            defaultValue={name}
            onChange={(e) => (name = e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            defaultValue={email}
            onChange={(e) => (email = e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormCustom;
