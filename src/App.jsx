import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from './Components/NavBar'
import { Home } from './views/Home'
import { Error404 } from './views/Home404'
import { Products } from './views/Products'
import { ProductDetail } from './views/ProductDetail'
import "./index.css"

function App() {
   return (
      <BrowserRouter>
   <NavBar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/model/:model" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/category/:categoryId" element={<Home />} />
   </Routes>
   
   </BrowserRouter>
   )
}

export default App
