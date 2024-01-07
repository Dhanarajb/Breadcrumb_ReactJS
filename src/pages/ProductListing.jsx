import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'



const ProductListing = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((resp) => resp.json())
            .then((resp) => {
                setProducts(resp.products)
            })
    }, [])
    return (
        <div>
            <span>Products Listing 📜</span>
            <div className="product-grid">
                {
                    products.map((product) => {
                        return <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt="img" />
                                <h3>{product.title}</h3>
                                <h3>{product.price}</h3>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductListing