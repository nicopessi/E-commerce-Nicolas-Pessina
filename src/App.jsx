import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from './Components/NavBar'
import { Error404 } from './views/Home404'
import { ItemListContainer} from './Components/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer'
import "./index.css"
import { Provider } from "./context/ItemsContext"
import { Cart } from "./Components/Cart"
import  QuienesSomos  from "./views/QuienesSomos"
import ContactUs  from "./views/Contact"
import Purchases from "./views/Checkout"

function App() {
   return (
      <Provider>
      <BrowserRouter>
   <NavBar />
   <Routes>
      <Route path="/QuienesSomos" element={<QuienesSomos />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/products/:id" element={<ItemDetailContainer />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Checkout" element={<Purchases />} />
   </Routes>
   
   </BrowserRouter>
   </Provider>
   )
}

export default App
