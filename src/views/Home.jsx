import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import data from '../data/products.json';
import '../index.css'


export const Home = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, 2000);
        }).then((response) => {
          if (categoryId) {
            const productsFilteredByCategory = response.filter((product) => product.model === categoryId);
            setProducts(productsFilteredByCategory);
          } else {
            setProducts(response);
          }
        });
      }, [categoryId]);

    return (
        <Container>
            <h1 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '2em', padding: "20px"}}>PRODUCTOS DJI</h1>
            <Container fluid>
            <Row > 
                {products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                    <Card key={product.id} style={{flex: 1, borderColor: '#f1f2f4'}}>
                        <Card.Img variant="top" src={product.imagen} height="150" />
                        <Card.Body>
                            <Card.Title style={{fontWeight: 'bold', fontSize: '1.5em', alignContent: 'center'}}>{product.model}</Card.Title>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className="card-text-limited">{product.descripcion}</Card.Text>
                            <Link to={`/products/${product.id}`}>
                                <Button style={{width: '70%', margin: 'auto', display: 'block'}}>VER MAS</Button>
                            </Link>
                           
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
                
            </Container>    
        </Container>
    )
}