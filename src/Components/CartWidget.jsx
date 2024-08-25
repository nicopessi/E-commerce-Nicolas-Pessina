import cart from '../assets/cart.png'; 
import logo from '../assets/djilogo.png';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";


export const CartWidget = () => {
    const {items} = useContext(ItemsContext);
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to={"/cart"}> 
<img src={cart} height={40} alt="carrito" />
{totalQuantity > 0 && <span>{totalQuantity}</span>}
</Link>
    )
}

export const Logo = () => 
<> 
<img src={logo} height={50} alt="logo" />
</>;
