import { useState, useEffect } from "react";
import { MESSAGE_URL } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Card, Container, Row } from "react-bootstrap";

function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(MESSAGE_URL);
        setMessages(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="success" size="large" />
        <h3>Loading Messages</h3>
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong, check your API {error}</div>;
  }

  return (
    <>
      {messages.map(function (inboxdetails) {
        const { name, email, message, id } = inboxdetails;
        return (
          <div className="inbox-container" key={id}>
            <Container fluid className="inbox-container">
              <Row className="justify-content-md-center">
                <Card border="none" style={{ width: "60rem" }}>
                  <Card.Body className="inbox-body">
                    <Card.Title>From: {name}</Card.Title>
                    <Card.Subtitle> Email: {email}</Card.Subtitle>
                    <Card.Text>
                      {" "}
                      <br />
                      <b>Message:</b> <p>{message}</p>{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Container>
          </div>
        );
      })}
    </>
  );
}

export default MessagesList;
