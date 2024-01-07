import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((resp) => resp.json())
            .then((resp) => {
                const sliceTrending = resp.products.slice(0, 6)
                setTrendingProduct(sliceTrending)
            })
    }, [])
    return (
        <div>
            <span>Trending Products 🔥</span>
            <div className="product-grid">
                {
                    trendingProduct.map((product) => {
                        return <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt="img" />
                                <h3>{product.price}</h3>
                                <h3>{product.title}</h3>
                            </Link>
                        </div>
                    })
                }
            </div>
            <Link to='/products'>
                <button style={{ width: "100%", padding: 10 }}>View All Products</button>
            </Link>
        </div>
    )
}

export default Home