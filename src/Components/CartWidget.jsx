import cart from '../assets/cart.png'; 
import logo from '../assets/djilogo.png';	

export const CartWidget = () => 
<> 
<img src={cart} height={40} alt="carrito" />
<span>0</span>

</>;

export const Logo = () => 
<> 
<img src={logo} height={50} alt="logo" />
</>;
