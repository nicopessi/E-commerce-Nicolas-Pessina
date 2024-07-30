import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import products from "../data/products.json"
import { Button } from "react-bootstrap"

export const ProductDetail = () => {
	const [productId, setProductId] = useState(null)
	const { id } = useParams()

	console.log({ id })
	useEffect(() => {
		setProductId(products.find(product => product.id === Number(id)))
	}, [id])

	if (!productId) return <div>Loading...</div>

	return (
		<main>

			<h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em', padding: "20px" }}>Detalle del producto: {productId.model} </h1>
			
            
			<img style={{ display: 'block', margin: 'auto' }} width={300} src={productId.imagen} />

			<p style={{ textAlign: 'center', padding: "20px", fontSize: '1.5em' }}>{productId.descripcion}</p>
			<Button style={{ margin: 'auto', display: 'block' }} variant="primary">Agregar al carrito</Button>
			<br /> <br />
		</main>
	)
}
