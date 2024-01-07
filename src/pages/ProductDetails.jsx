import React, { useState, useEffect } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((resp) => resp.json())
            .then((resp) => {
                setProduct(resp)
            })
    }, [])

    console.log(product)
    console.log(id)
    return (
        <div>
            <h2>Product details</h2>
            {
                product ? (
                    <div style={{ display: "flex" }}>
                        <img style={{ height: 300 }} src={product.thumbnail} alt={product.title} />
                        <div>
                            <h2>{product?.title}</h2>
                            <h3>$ {product.price}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ) : <p>Loading...</p>
            }
        </div >
    )
}

export default ProductDetails