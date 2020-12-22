import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formData) => {
      console.log(JSON.stringify(formData));
    },
  });
  
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </FormGroup>
      <FormGroup>
        <Button className="w-100" color="primary">
          Login
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SignupForm;
