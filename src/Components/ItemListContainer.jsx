import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'; 
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Obtén el id de la URL

    useEffect(() => {
        const db = getFirestore();
        const refCollection = !id
            ? collection(db, "items") // Si no hay id, obtén todos los items
            : query(collection(db, "items"), where("categoryId", "==", id)); // Si hay id, filtra por categoryId

        getDocs(refCollection)
            .then((snapshot) => {
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }; // Mapea los datos de los documentos
                    })
                );
            })
            .finally(() => setLoading(false));
    }, [id]); // El efecto se ejecuta cada vez que cambia el id

    if (loading) {
        return (
            <Spinner animation="border" role="status" style={{ width: '100px', height: '100px', margin: 'auto', padding: '20px', display: 'block' }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    if (items.length === 0) {
        return <h1 style={{ textAlign: 'center', padding: '20px' }}>No products found</h1>;
    }

    return (
        <Container fluid>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em', padding: "20px" }}>
                Products: {id || 'All'}  
            </h1>
            <Container fluid>
                <Row>
                    {items.map((i) => (
                        <Col key={i.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ marginBottom: '10px', borderColor: '#f1f2f4' }}>
                                <Card.Img variant="top" src={i.img} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text className="card-text-limited">{i.description}</Card.Text>
                                    <Link to={`/products/${i.id}`}>
                                        <Button variant="primary" style={{ width: '70%', margin: 'auto', display: 'block' }}>
                                            See details
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};
