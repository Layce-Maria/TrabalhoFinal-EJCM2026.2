import "./Products.css"
import jacketImg from "../../assets/vintageJacket.jpeg"
import blazerImg from "../../assets/blazer.jpeg"
import jeansImg from "../../assets/jeans.jpeg"
import blouseImg from "../../assets/silkBlouse.jpeg"

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
    return (
        <section className="products">
            <h1 className="products-title">Featured Products</h1>
            <p className="products-description">Handpicked favorites just for you</p>

            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
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
                    </div>
                ))}
            </div>
        </section>
    )
}