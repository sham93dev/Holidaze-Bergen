import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { MESSAGE_URL } from "../../constants/api";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import MessageModal from "../modals/ContactModal";

const schema = yup.object().shape({
  name: yup.string().required("Enter your full name").min(3, "Minimum 3 characters required"),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

export default function Message({ messageData }) {
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data.messages = messageData;

    try {
      const response = await axios.post(MESSAGE_URL, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setModal(true);
    }
  }

  return (
    <>
      <Container fluid>
        <Row id="contactForm">
          <Col className="col-lg-12 col-design ">
            <h3>Give us Feedback</h3>
            {modal && <MessageModal show={modal} />}
            <Form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <Col className="col-md-6">
                <Form.Group>
                  <Form.Label>Enter your full name</Form.Label>
                  <Form.Control name="name" placeholder="Name: " {...register("name")} />
                  {errors?.name && <span>{errors?.name.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter your Email</Form.Label>
                  <Form.Control name="email" placeholder="Email:" {...register("email")} />
                  {errors?.email && <span>{errors?.email.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>What can we help you with?</Form.Label>
                  <Form.Control name="message" as="textarea" rows="5" placeholder="Your message.." {...register("message")} />
                  {errors?.message && <span>{errors?.message.message}</span>}
                </Form.Group>
                <Button className="submit-btn" type="submit">
                  Send
                </Button>
                <MessageModal
                  show={modal}
                  onHide={() => {
                    setModal(false);
                    window.location.reload();
                  }}
                />
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
