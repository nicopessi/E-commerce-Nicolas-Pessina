import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
import { ItemsContext } from "../context/ItemsContext";
import { ItemCount } from "./ItemCount";
import noProduct from "../assets/noproducts.png";
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(ItemsContext);

  const onAdd = async (count) => {
    // Add item to cart
    addItem({ ...item, quantity: count });

    // Update stock in the database
    const db = getFirestore();
    const itemRef = doc(db, "items", id);

    try {
      await updateDoc(itemRef, {
        stock: item.stock - count
      });
      console.log(`Stock actualizado: ${item.stock - count}`);
    } catch (error) {
      console.error("Error actualizando el stock:", error);
    }
  };

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner animation="border" role="status" style={{ width: '100px', height: '100px', margin: 'auto', padding: '20px', display: 'block' }}>
  <span className="visually-hidden">Loading...</span>
</Spinner>;
  if (!item) return (<>
    <img src={noProduct} alt="noProduct"  style={{display: 'flex', margin: 'auto', marginTop: '100px'}}/>
    <p style={{ textAlign: 'center', padding: "20px", fontSize: '2em', margin: "20px" }}>No se encontro el producto</p>
    </>
  );

  return (
    <Container fluid style={{ padding: "20px", display: 'block', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em', padding: "10px" }}>
      PRODUCT DETAIL: {item.title}
      </h1>
      <img 
        style={{ display: 'flex', margin: 'auto', height: '230px' }} 
        src={item.img} 
        alt={item.title} 
      />
      <p style={{ textAlign: 'center', padding: "20px", fontSize: '1em', margin: "20px" }}>
        {item.description}
      </p>
      <p style={{ textAlign: 'center', padding: "5px", fontSize: '1.5em', margin: "auto" }}>
        Stock: {item.stock} | Price Unit: ${item.price}
      </p>
     
      <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      
      <Link to="/">
        <Button style={{ margin: 'auto', display: 'block', marginTop: '10px' }} variant="primary">
        Return to menu
        </Button>
      </Link>
      <br /> <br />
    </Container>
  );
};
