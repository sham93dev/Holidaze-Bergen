import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ENQUIRIES_URL } from "../../constants/api";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import EnquiryModal from "../modals/EnquiryModal";

const schema = yup.object().shape({
  accommodations: yup.string.apply().required("Please choose an accommodation"),
  name: yup.string().required("Enter your full name").min(3, "Minimum 3 characters required"),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  checkin: yup.date().required("Please choose a date for check-in"),
  checkout: yup.date().required("Please choose a date for check-out"),
  adults: yup.number().required("Please choose amout of adults").min(1, "Minimum 1 adult required"),
  children: yup.number().required("Please choose amout of children"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

export default function Message({ enquiriesData }) {
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data.enquires = enquiriesData;

    try {
      const response = await axios.post(ENQUIRIES_URL, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setModal(true);
    }
  }

  return (
    <>
      <Container fluid className="bookingForm">
        <Row>
          <Col className="col-lg-12 col-design ">
            <h3>Book your stay</h3>
            {modal && <EnquiryModal show={modal} />}
            <Form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <Col className="col-md-9">
                <Form.Group>
                  <Form.Label>Chosen accommodation</Form.Label>
                  <Form.Control name="accommodations" placeholder="accommodation:" as="select" {...register("accommodations")}>
                    <option value=""> Choose Accommodation</option>
                    <option value="Bergen_City"> Bergen City</option>
                    <option value="Bygdehuset">Bygdehuset</option>
                    <option value="Casa_del_tourist">Casa del tourist</option>
                    <option value="Come_and_Go">Come and Go</option>
                    <option value="Farger_Overnatt">Farger Overnatt</option>
                    <option value="Fisketorget">Fisketorget</option>
                    <option value="Koselig_Hjem">Koselig Hjem</option>
                    <option value="Kystvakten">Kystvakten</option>
                    <option value="Luna_BB">Luna BB</option>
                    <option value="Munkehuset">Munkehuset</option>
                    <option value="Orkenen_Byen">Orkenen Byen</option>
                    <option value="Regnbuen">Regnbuen</option>
                    <option value="Skogen">Skogen</option>
                    <option value="Solnedgang Milo">Solnedgang Milo</option>
                    <option value="Two_Brothers">Two Brothers</option>
                    <option value="Villa_de_mella">Villa de mella</option>
                  </Form.Control>
                  {errors?.accommodations && <span>{errors?.accommodations.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter your full name</Form.Label>
                  <Form.Control name="name" placeholder="Name:" {...register("name")} />
                  {errors?.name && <span>{errors?.name.message}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter your Email</Form.Label>
                  <Form.Control name="email" placeholder="Email:" {...register("email")} />
                  {errors?.email && <span>{errors?.email.message}</span>}
                </Form.Group>
                <div className="pick-value-wrapper">
                  <Form.Group>
                    <Form.Label id="label-styled">Check-in</Form.Label>
                    <Form.Control type="date" name="checkin" placeholder="Choose your check in date.." {...register("checkin")} />
                    {errors?.checkin && <span>{errors?.checkin.message}</span>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label id="label-styled">Check-out</Form.Label>
                    <Form.Control type="date" name="checkout" placeholder="Choose your check out date.." {...register("checkout")} />
                    {errors?.checkout && <span>{errors?.checkout.message}</span>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label id="label-styled">Adults</Form.Label>
                    <Form.Control type="number" name="checkout" placeholder="0" {...register("adults")} />
                    {errors?.adults && <span>{errors?.adults.message}</span>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label id="label-styled">Children</Form.Label>
                    <Form.Control type="number" name="checkout" placeholder="0" {...register("children")} />
                    {errors?.children && <span>{errors?.children.message}</span>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Special needs? Let us know</Form.Label>
                    <Form.Control name="message" as="textarea" rows="4" placeholder="Your message.." {...register("message")} />
                    {errors?.message && <span>{errors?.message.message}</span>}
                  </Form.Group>
                </div>

                <Button className="submit-btn" type="submit">
                  Send
                </Button>
                <EnquiryModal
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
