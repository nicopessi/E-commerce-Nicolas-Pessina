import { Container, Button, Row, Col } from "react-bootstrap";
import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Image from 'react-bootstrap/Image';
import CloseButton from 'react-bootstrap/CloseButton';
import noitems from "../assets/noitems.png";
import { Link } from "react-router-dom";

const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { reset, removeItem, items } = useContext(ItemsContext);

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const handleChange = (ev) => {
        setBuyer(prev => ({ ...prev, [ev.target.name]: ev.target.value }));
    };

    const handleOrder = async (ev) => {
        ev.preventDefault();


        if (buyer.email !== buyer.email2) {
            alert("The emails do not match.");
            return;
        }
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        const order = {
            buyer,
            items,
            total,
        };

        try {
            const { id } = await addDoc(orderCollection, order);
            if (id) {
                alert("Your order: " + id + " has been completed");
                reset();
                setBuyer(initialValues);
            }
        } catch (error) {
            console.error("Error al completar el pedido:", error);
            alert("Hubo un error al completar su pedido.");
        }
    };

    return (
        <Container>
            {items.length > 0 ? (
                <>
                    <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2em", padding: "20px" }}>
                        PRODUCTS IN CART
                    </h1>
                    {items.map((i) => (
                        <Container key={i.id} className="mb-3">
                            <Row className="align-items-center">
                                <Col><h3>{i.title}</h3></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col>
                                    <Image src={i.img} height={100} alt={i.title} thumbnail style={{ borderColor: '#f1f2f4' }} />
                                </Col>
                                <Col><p>Unit Price</p>${i.price}</Col>
                                <Col><p>Count</p>{i.quantity}</Col>
                                <Col><p>Subtotal</p>${i.price * i.quantity}</Col>
                                <Col>
                                    <p>Delete</p>
                                    <CloseButton aria-label="Hide" onClick={() => removeItem(i.id)} />
                                </Col>
                            </Row>
                            <hr />
                        </Container>
                    ))}
                    <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "1.5em" }}>Total: ${total}</p>
                    <Button onClick={reset} variant="outline-danger" className="mb-3" style={{ display: 'flex', margin: 'auto' }}>
                        Empty cart
                    </Button>
                    <Link to={"/"}>
                        <Button
                            type="button"
                            variant="outline-success"
                            style={{ display: 'flex', margin: 'auto' }}
                        >
                            Continue buy
                        </Button>
                    </Link>
                </>
            ) : (
                <Container>
                    <Link  to={"/"}>
                    <Image src={noitems} alt="No hay items" style={{ display: 'flex', margin: 'auto' }} />
                    </Link>
                    <p style={{ fontWeight: "bold", textAlign: "center" }}>NO PRODUCTS IN CART!</p>
                    <Link to={"/"}>
                        <Button
                            type="button"
                            variant="outline-success"
                            style={{ display: 'flex', margin: 'auto' }}
                        >
                            Go to Products
                        </Button>
                    </Link>
                    <hr />
                </Container>
            )}

            {!!items.length && (
                <form onSubmit={handleOrder}>
                    <h4>Complete your order</h4>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={buyer.name}
                            onChange={handleChange}
                            name="name"
                            required
                            style={{ width: '50%' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Phone"
                        className="mb-3"
                    >
                        <Form.Control
                            type="tel"
                            placeholder="Phone"
                            value={buyer.phone}
                            onChange={handleChange}
                            name="phone"
                            required
                            style={{ width: '50%' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingEmail"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={buyer.email}
                            onChange={handleChange}
                            name="email"
                            required
                            style={{ width: '50%' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingEmail2"
                        label="Repeat email"
                        className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Repeat email"
                            value={buyer.email2}
                            onChange={handleChange}
                            name="email2"
                            required
                            style={{ width: '50%' }}
                        />
                    </FloatingLabel>
                    <Button
                        type="submit"
                        variant="outline-success"
                        style={{ display: 'flex', margin: 'auto' }}
                    >
                        Confirm purchase
                    </Button>
                    <hr />
                </form>
            )}
        </Container>
    );
};
