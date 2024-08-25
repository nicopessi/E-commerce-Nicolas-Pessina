import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import djilogo from '../assets/djilogo.png'; // Asegúrate de tener una imagen adecuada en tu carpeta de assets

const QuienesSomos = () => {
    return (
        <Container fluid style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
          <Row className="text-center mb-4">
            <Col>
              <h1 style={{ fontSize: '3em', fontWeight: 'bold', color: '#343a40' }}>About Us</h1>
              <p style={{ fontSize: '1.2em', color: '#6c757d' }}>
                Get to know the team behind our company and discover our mission and values.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img variant="top" src={djilogo} style={{ borderRadius: '8px', height: '150px', width: '150px', margin: 'auto' }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '2em', fontWeight: 'bold' }}>Our Team</Card.Title>
                  <Card.Text style={{ fontSize: '1.1em', color: '#495057' }}>
                    We are a team of professionals passionate about technology and innovation. Our team works tirelessly to deliver high-quality solutions and provide excellent customer service.
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1em', color: '#6c757d' }}>
                    Our diverse team brings a wealth of experience and expertise, ensuring that we meet and exceed our clients expectations.
                  </Card.Text>
                  <Button variant="primary" style={{ marginTop: '10px' }}>
                    Learn More About Us
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '2em', fontWeight: 'bold' }}>Our Mission</Card.Title>
                  <Card.Text style={{ fontSize: '1.1em', color: '#495057' }}>
                    Our mission is to provide innovative technological solutions that drive our clients success. We are committed to quality, transparency, and excellence in every project we undertake.
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1em', color: '#6c757d' }}>
                    We strive to stay ahead of industry trends and continuously improve our services to adapt to the evolving needs of our clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col md={12}>
              <Card style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '2em', fontWeight: 'bold' }}>Our Values</Card.Title>
                  <Card.Text style={{ fontSize: '1.1em', color: '#495057' }}>
                    Integrity, innovation, and customer satisfaction are at the core of our values. We believe in building long-term relationships based on trust and delivering exceptional value to our clients.
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1em', color: '#6c757d' }}>
                    We foster a collaborative and inclusive work environment where creativity and diverse perspectives are encouraged and valued.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <Button variant="outline-primary" style={{ fontSize: '1.1em' }}>
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      );
    };

export default QuienesSomos;
