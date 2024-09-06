import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Screenshot 2024-09-04 192530.png";
import navIcon1 from "../assets/img/youtube-app-white-icon.webp";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const handleY = (event) => {
    event.preventDefault();
    window.open("https://youtube.com/@takoosolutions?si=BpumcBlXL2rdGuE2","_blank")
    //window.location.href = 'https://reactjs.org';
  };
  const handleW = (event) => {
    event.preventDefault();
    window.open("https://wa.me/+201099845832","_blank")
    //window.location.href = 'https://reactjs.org';
  };
  const handleF = (event) => {
    event.preventDefault();
    window.open("https://web.facebook.com/mo7amedgomaa7?mibextid=ZbWKwL&_rdc=1&_rdr","_blank")
    //window.location.href = 'https://reactjs.org';
  };
  const handleI = (event) => {
    event.preventDefault();
    window.open("https://www.instagram.com/mo7amedgomaa7/?igsh=aDdmd3hqbm90eGl5","_blank")
    //window.location.href = 'https://reactjs.org';
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a><img src={navIcon1} alt="" onClick={handleY}/></a>
              <a><img src={navIcon2} alt="" onClick={handleF}/></a>
              <a><img src={navIcon3} alt="" onClick={handleI}/></a>
            </div>
            <p>Copyright 2024 . All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
