import React from "react";
import { SignupForm } from "../components/authentication";

const Signup = () => {
  return (
    <Container className="h-100" fluid>
      <Row className="hero-container">
        <header className="hero-header font-weight-lighter text-light">
          <h1>Simple. But Powerful.</h1>
          <h3>We Are Code Ryzens</h3>
        </header>
        <main className="hero-content">
          <h4 className="text-center">Signup</h4>
          <SignupForm />
        </main>
      </Row>
    </Container>
  );
};

export default Signup;
