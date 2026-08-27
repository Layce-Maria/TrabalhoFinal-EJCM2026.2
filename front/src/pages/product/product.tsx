import { useState } from 'react'
import './product.css'
import calcajeans1 from '../../assets/products/calcajeans1.jpg'
import calcajeans2 from '../../assets/products/calcajeans2.jpg'
import calcajeans3 from '../../assets/products/calcajeans3.jpg'
import calcajeans4 from '../../assets/products/calcajeans4.jpg'
import sweater from '../../assets/products/sweater.jpg'
import tenis from '../../assets/products/tenis.jpg'
import vestido from '../../assets/products/vestido.jpg'


const product = {
  breadcrumb: ['Home', 'Sale'],
  name: 'Comfort Slim Jeans',
  brand: 'STYLE Premium',
  tags: ['Tops', 'Sale'],
  rating: 4.7,
  reviewsCount: 203,
  price: 79,
  originalPrice: 99,
  discountPercent: 41,
  stockLeft: 12,
  colors: [
    { name: 'Bege', hex: '#b69567' },
    { name: 'White', hex: '#f5f5f0' },
    { name: 'Blue', hex: '#1d3fa0' },
    { name: 'Gray', hex: '#b7aca4' },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  maxQuantity: 12,
  description:
    'Make your move with our Comfort Jeans Collection. These premium fitted, ultra-soft jeans are designed for the ultimate feel-good experience. Featuring a super soft, stretchy slim-fit, our jeans offer the perfect combination of style and comfort.',
  keyFeatures: [
    'Premium fitted, ultra-soft jeans with signature four-way stretch.',
    'Classic stitch with 5 pockets.',
    'Composition: 54% Rayon, 24% Cotton, 20% Polyester, 2% Spandex.',
    'Machine washable',
    'Eco-friendly dyes',
  ],
  images: [calcajeans1, calcajeans2, calcajeans3, calcajeans4],
}

type RelatedProduct = {
  name: string
  rating: number
  price: number
  originalPrice: number | null
  image: string
  imagePosition?: string
}

const relatedProducts: RelatedProduct[] = [
  { name: 'Athletic Sneakers', rating: 4.5, price: 84, originalPrice: 140, image: tenis },
  { name: 'Summer Dress', rating: 4.6, price: 49, originalPrice: 89, image: vestido, imagePosition: 'center 70%' },
  { name: 'Cashmere Sweater', rating: 4.8, price: 120, originalPrice: 156, image: sweater, imagePosition: 'center 70%' },
]

type Tab = 'description' | 'specifications' | 'reviews'

export function Product() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
  const [selectedSize, setSelectedSize] = useState('XL')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [activeTab, setActiveTab] = useState<Tab>('description')

  const decreaseQuantity = () => setQuantity((q) => Math.max(1, q - 1))
  const increaseQuantity = () => setQuantity((q) => Math.min(product.maxQuantity, q + 1))

  const showPrevImage = () =>
    setActiveImage((i) => (i - 1 + product.images.length) % product.images.length)
  const showNextImage = () => setActiveImage((i) => (i + 1) % product.images.length)

  return (
    <main className="product-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        {product.breadcrumb.map((crumb) => (
          <span key={crumb}>
            <a href="#">{crumb}</a>
            <span className="breadcrumb-sep">/</span>
          </span>
        ))}
        <span className="breadcrumb-current">{product.name}</span>
      </nav>

      <div className="product-main">
        <section className="product-gallery">
          <div className="gallery-main">
            <span className="discount-badge">-{product.discountPercent}%</span>
            <button className="wishlist-btn" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            <button className="gallery-nav gallery-prev" aria-label="Previous image" onClick={showPrevImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6" />
              </svg>
            </button>
            <button className="gallery-nav gallery-next" aria-label="Next image" onClick={showNextImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </button>

            <img
              className="gallery-main-image"
              src={product.images[activeImage]}
              alt={product.name}
            />
          </div>

          <div className="gallery-thumbs">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`thumb${index === activeImage ? ' thumb-active' : ''}`}
                aria-label={`Show image ${index + 1}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
        </section>

        <section className="product-info">
          <div className="product-tags">
            {product.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          <h1 className="product-name">{product.name}</h1>
          <p className="product-brand">{product.brand}</p>

          <div className="product-rating">
            <span className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  viewBox="0 0 24 24"
                  className={index < Math.round(product.rating) ? 'star star-filled' : 'star'}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </span>
            <span className="rating-value">{product.rating}</span>
            <span className="rating-count">({product.reviewsCount} reviews)</span>
          </div>

          <div className="product-price-row">
            <span className="price-current">${product.price}</span>
            <span className="price-original">${product.originalPrice}</span>
            <span className="low-stock-badge">Low Stock</span>
          </div>

          <p className="stock-status">
            <span className="stock-dot" />
            In Stock ({product.stockLeft} left)
          </p>

          <hr className="divider" />

          <div className="option-group">
            <span className="option-label">Color</span>
            <div className="color-options">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`color-swatch${color.name === selectedColor ? ' color-swatch-active' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                  aria-pressed={color.name === selectedColor}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          <div className="option-group">
            <div className="option-label-row">
              <span className="option-label">Size</span>
              <a href="#" className="size-guide-link">Size Guide</a>
            </div>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn${size === selectedSize ? ' size-btn-active' : ''}`}
                  aria-pressed={size === selectedSize}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <span className="option-label">Quantity</span>
            <div className="quantity-row">
              <div className="quantity-stepper">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.maxQuantity}
                >
                  +
                </button>
              </div>
              <span className="max-items-note">Max {product.maxQuantity} items</span>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn-add-to-cart" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Add to Cart
            </button>
            <button className="icon-btn share-btn" type="button" aria-label="Share">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
                <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
              </svg>
            </button>
          </div>

          <button className="btn-buy-now" type="button">Buy Now</button>

          <div className="trust-badges">
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="6" width="15" height="11" rx="1" />
                <path d="M16 10h3l3 3v4h-6z" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17.5" cy="19" r="2" />
              </svg>
              <div>
                <p>Free Shipping</p>
                <span>On orders over $50</span>
              </div>
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="1,4 1,10 7,10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
              <div>
                <p>Easy Returns</p>
                <span>30-day return policy</span>
              </div>
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
              </svg>
              <div>
                <p>Secure Payment</p>
                <span>100% secure checkout</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="product-tabs">
        <div className="tabs-header">
          <button
            className={`tab-btn${activeTab === 'description' ? ' tab-btn-active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`tab-btn${activeTab === 'specifications' ? ' tab-btn-active' : ''}`}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
          <button
            className={`tab-btn${activeTab === 'reviews' ? ' tab-btn-active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviewsCount})
          </button>
        </div>

        <div className="tabs-panel">
          {activeTab === 'description' && (
            <>
              <p>{product.description}</p>
              <p className="key-features-title">Key Features</p>
              <ul className="key-features-list">
                {product.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {activeTab === 'specifications' && (
            <p>Specifications not available yet.</p>
          )}
          {activeTab === 'reviews' && (
            <p>Reviews not available yet.</p>
          )}
        </div>
      </section>

      <section className="related-products">
        <h2>You Might Also Like</h2>
        <div className="related-grid">
          {relatedProducts.map((item) => (
            <article className="related-card" key={item.name}>
              <img className="related-image" src={item.image} alt={item.name} style={{ objectPosition: item.imagePosition ?? 'center' }}/>
              <div className="related-info">
                <p className="related-name">{item.name}</p>
                <p className="related-rating">
                  <svg viewBox="0 0 24 24" className="star star-filled">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {item.rating}
                </p>
                <div className="related-price-row">
                  <span className="related-price">${item.price}</span>
                  {item.originalPrice && (
                    <span className="related-original-price">${item.originalPrice}</span>
                  )}
                  <a href="#" className="related-view-link">View</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}