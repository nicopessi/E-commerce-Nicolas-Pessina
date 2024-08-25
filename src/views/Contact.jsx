import  { useState } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button, Alert } from 'react-bootstrap';

const ContactUs = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: '',
    email2: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (buyer.email !== buyer.email2) {
      setMessage('The email addresses do not match.');
      return;
    }
    setMessage('Your information has been received. We will contact you soon!');
    // Handle form submission here (e.g., send data to an API)
  };

  return (
    <Container fluid style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
      <Row className="text-center mb-4">
        <Col>
          <h1 style={{ fontSize: '3em', fontWeight: 'bold', color: '#343a40' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2em', color: '#6c757d' }}>
            Get in touch with us for information, advice, services, or technical support.
          </p>
        </Col>
      </Row>
      <Row className="text-center mb-4">
        <Col md={3}>
          <h4 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Information</h4>
          <p style={{ fontSize: '1.1em', color: '#495057' }}>
            For general inquiries about our company or products, please reach out to us.
          </p>
        </Col>
        <Col md={3}>
          <h4 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Advice</h4>
          <p style={{ fontSize: '1.1em', color: '#495057' }}>
            Need guidance on which products best suit your needs? Our team is here to help.
          </p>
        </Col>
        <Col md={3}>
          <h4 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Services</h4>
          <p style={{ fontSize: '1.1em', color: '#495057' }}>
            Learn more about the various services we offer to enhance your experience.
          </p>
        </Col>
        <Col md={3}>
          <h4 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Technical Support</h4>
          <p style={{ fontSize: '1.1em', color: '#495057' }}>
            Facing technical issues? Contact our support team for assistance.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          {message && <Alert variant={message.includes('error') ? 'danger' : 'success'}>{message}</Alert>}
          <Form onSubmit={handleOrder}>
            <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Complete Your Information</h4>
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                value={buyer.name}
                onChange={handleChange}
                name="name"
                required
                style={{ width: '100%' }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Phone"
                value={buyer.phone}
                onChange={handleChange}
                name="phone"
                required
                style={{ width: '100%' }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={buyer.email}
                onChange={handleChange}
                name="email"
                required
                style={{ width: '100%' }}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail2" label="Repeat Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Repeat Email"
                value={buyer.email2}
                onChange={handleChange}
                name="email2"
                required
                style={{ width: '100%' }}
              />
            </FloatingLabel>
            <Button
              type="submit"
              variant="outline-success"
              style={{ display: 'flex', margin: 'auto', marginTop: '10px' }}
            >
              Confirm Submission
            </Button>
            <hr />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
