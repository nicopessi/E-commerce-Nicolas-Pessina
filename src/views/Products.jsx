import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap'; 
import products from '../data/products.json';

export const Products = () => {
    const { model } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        
        const filtered = products.filter(product => product.model === model);
        setFilteredProducts(filtered);
    }, [model]); 

    console.log('Filtered Products:', filteredProducts); // Para depurar

    return (
        <Container fluid >
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em', padding: "20px" }}> Modelos: {model}</h1>
            <Container flud>
            <Row>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ marginBottom: '10px', borderColor: '#f1f2f4' }}>
                                <Card.Img variant="top" src={product.imagen} height="150" />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className="card-text-limited">{product.descripcion}</Card.Text>
                                    <Link to={`/products/${product.id}`}>
                                        <Button variant="primary" style={{width: '70%', margin: 'auto', display: 'block'}} >Ver Detalles</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p>No products found for model {model}</p>
                    </Col>
                )}
            </Row>
        </Container>
      </Container>
    );
};
