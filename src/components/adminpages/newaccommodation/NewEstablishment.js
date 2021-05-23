import React, { useContext } from "react";
import AdminMenu from "../../layout/AdminMenu";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import EstablishmentModal from "../../modals/EstablishmentModal";
import Footer from "../../layout/Footer";
import { BASE_URL } from "../../../constants/api";

const schema = yup.object().shape({
  name: yup.string().required("Enter name of hotel").min(3, "Minimum 3 characters required"),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  price: yup.number().required("Price is required").min(1, "Must be at least 2 digits"),
  type: yup.string().required("Please choose type of accommodation"),
  description: yup.string().required("Enter description").min(5, "Minimum 5 characters required"),
});

export default function NewEstablishment({ accommodationData }) {
  const [info, setInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [auth] = useContext(AuthContext);

  const headers = {
    headers: {
      'Authorization': `Bearer ${auth.jwt}`
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("files.image", info, info.name);
	  formData.append("data", JSON.stringify(data));
    console.log(formData);

  try {
      await axios.post (BASE_URL, formData, headers)
    } catch (error) {
      console.log("error", error);
    } finally {
      setModal(true);
    }
  } 
  
  return (
    <>
      <AdminMenu />
      <Container fluid>
        <Row id="contactForm">
          <Col className="col-lg-12 col-design ">
            <h3>Add Accommodation</h3>
            {modal && <EstablishmentModal show={modal} />}
            <Form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <Col className="col-md-6">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" placeholder="Accommodation name:" {...register("name")} />
                  {errors?.name && <span>{errors?.name.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Control name="type" placeholder="Choose type of accommodation" as="select" {...register("type")}>
                    <option value=""> Choose Accommodation</option>
                    <option value="Hotel"> Hotel</option>
                    <option value="Bed and Breakfast">Bed and Breakfast</option>
                    <option value="Guesthouse">Guesthouse</option>
                  </Form.Control>
                  {errors?.type && <span>{errors?.type.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" placeholder="Email:" {...register("email")} />
                  {errors?.email && <span>{errors?.email.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label id="label-styled">Choose price</Form.Label>
                  <Form.Control type="number" name="price" placeholder="0" {...register("price")} />
                  {errors?.price && <span>{errors?.price.message}</span>}
                </Form.Group>
                <input  type="file" onChange={(event) => setInfo(event.target.files[0])} />
                <Form.Group>
                  <Form.Label>Describe your submission</Form.Label>
                  <Form.Control name="description" as="textarea" rows="5" placeholder="Your description.." {...register("description")} />
                  {errors?.description && <span>{errors?.description.message}</span>}
                </Form.Group>
                <Button className="submit-btn" type="submit">
                  Submit
                </Button>
                <EstablishmentModal
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
      <Footer />
    </>
  );
}