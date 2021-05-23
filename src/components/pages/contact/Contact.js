import ContactForm from "../../layout/ContactForm";
import Footer from "../../layout/Footer";

export default function ContactPage() {
  return (
    <>
      <div className="contact-page-wrapper">
        <div className="contact-container1">
          <h1>Holidaze</h1>
          <p>Donec diam neque, vestib.</p>
          <p>
            Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi,
            sit amet lobortis
          </p>
          <h2>Who are we?</h2>
          <p>Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus</p>
          <p id="hideText">"Nunc cursus, urna non placerat blandit, lacus urna congue leo, id venenatis tortor nulla et sem"</p>
        </div>
        <div className="contact-container2">
          <img src="./assets/about.jpg" alt="Holidaze team" />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
