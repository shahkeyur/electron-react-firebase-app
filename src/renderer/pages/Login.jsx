import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { LoginForm } from "../components/authentication";

const Login = () => {
  return (
    <Container className="h-100" fluid>
      <Row className="hero-container">
        <header className="hero-header position-relative font-weight-lighter text-light">
          <div className="overlay"></div>
          <div style={{ zIndex: "1" }}>
            <h1>Simple. But Powerful.</h1>
            <h3>Let's Build The Future.</h3>
          </div>
        </header>
        <main className="hero-content">
          <div className="text-right">
            <span> Not Registered Yet ?</span>
            <span>
              <NavLink
                to="/signup"
                className="d-inline-block pl-2 cursor-pointer"
              >
                Register
              </NavLink>
            </span>
          </div>
          <div className="m-auto" style={{ width: "70%", maxWidth: "500px" }}>
            <h3 className="text-center mb-3">Login</h3>
            <LoginForm />
          </div>
        </main>
      </Row>
    </Container>
  );
};

export default Login;
