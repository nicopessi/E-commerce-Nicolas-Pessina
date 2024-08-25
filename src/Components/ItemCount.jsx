import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Container } from "react-bootstrap";
import cart from "../assets/cart.png";
import '../styles/ItemCount.css'
import {MyComponent} from "./Alert";



export const ItemCount = ({onAdd, stock}) => {
    const [count , setCount] = useState(1)
    const [showComponent, setShowComponent] = useState(false);

   
    const handleIncrease = () => {
        if (count < stock) {
            setCount((prev) => prev + 1)
    }
};
    const handleDecrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
    }
    }
    const handleAdd = () => {
        onAdd(count);
        setCount(1);
        setShowComponent(true);      
    }
    return(
    <Container style={{ display: 'flex', justifyContent: 'center'}}>

    <Button variant="outline-primary" onClick={handleDecrease} className="btnCount" style={{fontWeight: 'bold'}}>-</Button>
    <span className="btnCount">{count}</span>
       <Button variant="outline-primary" onClick={handleIncrease} className="btnCount" style={{fontWeight: 'bold'}}>+</Button>
       <hr />
    
    <Button variant="outline-primary" onClick={handleAdd} className="btnCount">
        Add to cart
        {showComponent && <MyComponent />}
        <img src={cart} height={30} alt="Carrito" />
      </Button>
    </Container>
    )
};
ItemCount.propTypes = {
    onAdd: PropTypes.func.isRequired, 
    stock: PropTypes.number.isRequired, 
};
