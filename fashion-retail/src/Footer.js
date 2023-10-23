import React from "react";
import Footer from "./Footer.css";
import logo from "./STYKKER.png";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default function FooterBar() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p>
              <br />
              <h3>STŸKKER</h3>
              El Prat de Llobregat
              <br />
              Spain
              <br />
              hello@stykker.com
              <br />
              (+34) 642000000
              <br />
              <br />
              <p>
                <a
                  href="https://www.instagram.com/danadi_87/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    className="Instagram"
                    src="Instagram.svg"
                    alt="Instagram"
                    width="30%"
                    href="https://www.instagram.com/danadi_87/"
                    target="_blank"
                    rel="noopener"
                  />
                </a>
                <a
                  href="https://www.facebook.com/danadi_87/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    className="Facebook"
                    src="Facebook.svg"
                    alt="Facebook"
                    width="30%"
                    href="https://www.facebook.com/danadi_87/"
                    target="_blank"
                    rel="noopener"
                  />
                </a>
                <a
                  href="https://www.pinterest.com/mireladaniela/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    className="Pinterest"
                    src="Pinterest.svg"
                    alt="Pinterest"
                    width="30%"
                    href="https://www.pinterest.com/mireladaniela/"
                    target="_blank"
                    rel="noopener"
                  />
                </a>
              </p>
            </p>
          </Col>
          <Col>
            <ListGroup as="ul">
              <li>
                <h4>
                  <strong>Customer service</strong>
                </h4>
              </li>
              <li>FAQs</li>
              <li>Shipping/deliveries</li>
              <li>Returns/Refunds</li>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup as="ul">
              <li>
                <h4>
                  <strong>Legal Area</strong>
                </h4>
              </li>
              <li>Contact us</li>
              <li>Cookie Policy</li>
              <li>Privacy policy</li>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup as="ul">
              <li>
                <h4>
                  <strong>Join our list</strong>
                </h4>
              </li>
              <form>
                <div>
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email address"
                    frequired
                    autocomplete="off"
                  ></input>
                  <input type="submit" value="Subscribe"></input>
                  <p>
                    <label>
                      <input
                        name="AGREE_TO_TERMS"
                        type="checkbox"
                        value="1"
                        required
                      ></input>
                      <a
                        href="https://stykker.com/term-and-conditions"
                        target="_blank"
                        rel="noopener"
                      >
                        I have read and agree to the terms & conditions
                      </a>
                    </label>
                  </p>
                </div>
              </form>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
