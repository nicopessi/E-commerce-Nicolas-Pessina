import { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { Container, Row, Col } from 'react-bootstrap';

const Purchases = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    getDocs(orderCollection)
      .then((snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <Container>
      {orders.map((order) => (
        <Container key={order.id} className="mb-3">
          <Row className="align-items-center mb-2">
            <Col>
              <h3>Buyer Details</h3>
              <p><strong>Name:</strong> {order.buyer.name}</p>
              <p><strong>Email:</strong> {order.buyer.email}</p>
              <p><strong>Phone:</strong> {order.buyer.phone}</p>
            </Col>
          </Row>
          <Row className="align-items-center mb-2">
            <Col>
              <p><strong>Products:</strong></p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    <p><strong>Product ID:</strong> {item.id}</p>
                    <p><strong>Product name:</strong> {item.title}</p>
                    <p><strong>Category ID:</strong> {item.categoryId}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                  </li>
                ))}
              </ul>
            </Col>
            <Col>
              <p><strong>Total Price:</strong></p>
              ${order.total.toFixed(2)}
            </Col>
          </Row>
          <hr />
        </Container>
      ))}
    </Container>
  );
};

export default Purchases;
