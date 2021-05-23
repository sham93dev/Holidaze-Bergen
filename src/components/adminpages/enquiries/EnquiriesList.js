import { useState, useEffect } from "react";
import { ENQUIRIES_URL } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Container, Row, Card } from "react-bootstrap";

function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(ENQUIRIES_URL);
        setEnquiries(response.data);
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
        <h3>Loading Enquiries</h3>
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong, check your API {error}</div>;
  }

  return (
    <>
      {enquiries.map(function (enquirydetails) {
        const { name, email, message, id, adults, children, accommodations, checkin, checkout } = enquirydetails;
        return (
          <div className="inbox-container" key={id}>
            <Container fluid className="inbox-container">
              <Row className="justify-content-md-center">
                <Card style={{ width: "58rem" }}>
                  <Card.Header className="enquiry-header">
                    <span>Accommodation: {accommodations}</span> <span>{email}</span>
                  </Card.Header>

                  <div className="card-layout-section">
                    <Card.Img id="enquiry-card-img" variant="top" src="/assets/bergenthumbnail.jpg" />
                    <Card.Body>
                      <Card.Title className="enquiry-title">
                        <span>{name}</span>
                      </Card.Title>
                      <Card.Subtitle className="enquiry-subtitle">
                        <span>Checkin: {checkin}</span>
                        <span>Checkout: {checkout}</span>
                        <span>Adults:{children}</span>
                        <span>Children:{adults}</span>
                      </Card.Subtitle>
                      <Card.Text className="enquiry-message">
                        <p>
                          <strong>Message: </strong>
                          {message}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Row>
            </Container>
          </div>
        );
      })}
    </>
  );
}

export default EnquiriesList;
