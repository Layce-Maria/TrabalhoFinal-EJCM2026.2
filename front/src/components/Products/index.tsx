import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Products.css"
import jacketImg from "../../assets/vintageJacket.jpeg"
import blazerImg from "../../assets/blazer.jpeg"
import jeansImg from "../../assets/jeans.jpeg"
import blouseImg from "../../assets/silkBlouse.jpeg"
import { ArrowRight } from 'lucide-react'
import { api } from "../../services/api"

// id hardcodado porque não tem listagem de produtos
const FEATURED_PRODUCT_ID = "cmtc37ny30004p9ly7vr3x1ly"

const products = [
    {
    id: 1,
    image: jacketImg,
    badge: "Best Seller",
    badgeColor: "black",
    name: "Vintage Denim Jacket",
    rating: 4.8,
    reviews: 124,
    price: 89,
    oldPrice: 120,
    },
    {
    id: 2,
    image: blazerImg,
    badge: "New",
    badgeColor: "black",
    name: "Oversized Blazer",
    rating: 4.9,
    reviews: 89,
    price: 145,
    oldPrice: null,
    },
    {
    id: 3,
    image: jeansImg,
    badge: "Sale",
    badgeColor: "red",
    name: "Comfort Slim Jeans",
    rating: 4.7,
    reviews: 203,
    price: 79,
    oldPrice: 99,
    },
    {
    id: 4,
    image: blouseImg,
    badge: "Premium",
    badgeColor: "black",
    name: "Silk Blouse",
    rating: 4.8,
    reviews: 156,
    price: 125,
    oldPrice: null,
    },
]
export function Products() {
    const [items, setItems] = useState(products)

    useEffect(() => {
        if (!FEATURED_PRODUCT_ID) return

        api
            .get(`/products/${FEATURED_PRODUCT_ID}`)
            .then((response) => {
                const real = response.data
                setItems((current) =>
                    current.map((product) =>
                        product.id === 3
                            ? { ...product, name: real.name, price: real.price, rating: real.rating ?? product.rating }
                            : product
                    )
                )
            })
            .catch(() => {
                // sem login ou produto inexistente: mantém o mock nesse card
            })
    }, [])

    return (
        <section className="products">
            <h1 className="products-title">Featured Products</h1>
            <p className="products-description">Handpicked favorites just for you</p>

            <div className="product-list">
                {items.map((product) => {
                    const isReal = product.id === 3 && FEATURED_PRODUCT_ID

                    const card = (
                        <>
                            <div className="product-image-wrapper">
                                <span className={`badge badge-${product.badgeColor}`}>
                                    {product.badge}
                                </span>
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="rating">
                                    ⭐ {product.rating} <span>({product.reviews})</span>
                                </p>
                                <div className="price-row">
                                    <span className="price">${product.price}</span>

                                    {product.oldPrice && (
                                        <span className="old-price">${product.oldPrice}</span>
                                    )}
                                    <button className="add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        </>
                    )

                    return isReal ? (
                        <Link key={product.id} to={`/product/${FEATURED_PRODUCT_ID}`} className="product-card">
                            {card}
                        </Link>
                    ) : (
                        <div key={product.id} className="product-card">
                            {card}
                        </div>
                    )
                })}
            </div>
            <button className="view-products">View All Products <ArrowRight size={18} /></button>
        </section>
    )
}