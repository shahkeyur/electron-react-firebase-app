import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import firebaseClient from "../../helpers/firebase";
import classNames from "classnames";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      setLoading(true);
      firebaseClient
        .signup(email, password)
        .then((user) => {
          console.log("User signed up: " + user);
        })
        .catch(() => {
          console.log("Something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
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
        <Button
          className={classNames("w-100 mt-3", { disabled: loading })}
          color="primary"
        >
          {!loading ? "Signup" : "Singing up..."}
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SignupForm;
