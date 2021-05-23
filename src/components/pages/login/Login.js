import React from "react";
import LoginForm from "../../layout/LoginForm";
import Footer from "../../layout/Footer";
import { Accordion, Card, Button } from "react-bootstrap";
function Login() {
  return (
    <>
      <div className="login-page-wrapper">
        <div className="login-container1">
          <h1> Login to admin dashboard</h1>
          <Accordion defaultActiveKey="1">
            <Card className="login-accordion-card">
              <Card.Header className="login-accordion-header">
                <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                  Show username and password
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <span>
                    <p>Username: admin@strapi.com </p>
                  </span>
                  <span>
                    <p>Password: Admin123 </p>
                  </span>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
