import { useState } from 'react'
import './wishlist.css'
import calcajeans1 from '../../assets/products/calcajeans1.jpg'
import sweater from '../../assets/products/sweater.jpg'
import tenis from '../../assets/products/tenis.jpg'
import hoodie from '../../assets/products/hoodie.jpg'
import jeans from '../../assets/products/jeans.jpg'
import premium from '../../assets/products/premium.jpg'
import boots from '../../assets/products/boots.jpg'

type WishlistItem = {
  id: string
  brand: string
  name: string
  rating: number
  reviewsCount: number
  price: number
  originalPrice: number
  discountPercent: number
  addedDate: string
  tag: string
  outOfStock: boolean
  image?: string
  imagePosition?: string
}

const initialWishlistItems: WishlistItem[] = [
  {
    id: 'w1',
    brand: 'STYLE Premium',
    name: 'Comfort Slim Jeans',
    rating: 4.8,
    reviewsCount: 124,
    price: 29,
    originalPrice: 49,
    discountPercent: 41,
    addedDate: '14/01/2024',
    tag: 'Limited Time',
    outOfStock: false,
    image: calcajeans1,
  },
  {
    id: 'w2',
    brand: 'STYLE Luxury',
    name: 'Cashmere Sweater',
    rating: 4.8,
    reviewsCount: 156,
    price: 120,
    originalPrice: 200,
    discountPercent: 40,
    addedDate: '09/01/2024',
    tag: 'Luxury Sale',
    outOfStock: false,
    image: sweater,
  },
  {
    id: 'w3',
    brand: 'STYLE Sport',
    name: 'Athletic Sneakers',
    rating: 4.5,
    reviewsCount: 234,
    price: 84,
    originalPrice: 140,
    discountPercent: 40,
    addedDate: '04/01/2024',
    tag: 'Sport Sale',
    outOfStock: true,
    image: tenis,
  },
]

type RecommendedItem = {
  id: string
  name: string
  rating: number
  price: number
  image?: string
}

const recommendedItems: RecommendedItem[] = [
  { id: 'r1', name: 'Premium Cotton T-Shirt', rating: 4.6, price: 29, image: premium },
  { id: 'r2', name: 'Leather Anke Boots', rating: 4.8, price: 49, image: boots },
  { id: 'r3', name: 'Designer Jeans', rating: 4.8, price: 59, image: jeans },
  { id: 'r4', name: 'Premium Hoodie', rating: 4.9, price: 69, image: hoodie },
]

function ProductImage({ image, alt, className }: { image?: string; alt: string; className?: string }) {
  if (image) {
    return <img className={className} src={image} alt={alt} />
  }
  return (
    <div className={`image-placeholder${className ? ` ${className}` : ''}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  )
}

function StarRating({ rating, reviewsCount }: { rating: number; reviewsCount?: number }) {
  return (
    <span className="rating">
      <svg viewBox="0 0 24 24" className="star star-filled">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      {rating}
      {reviewsCount !== undefined && <span className="reviews-count">({reviewsCount})</span>}
    </span>
  )
}

export function Wishlist() {
  const [items, setItems] = useState<WishlistItem[]>(initialWishlistItems)

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const clearWishlist = () => {
    setItems([])
  }

  const addToCart = (id: string) => {
    console.log('Add to cart:', id)
  }

  const addAllToCart = () => {
    items.filter((item) => !item.outOfStock).forEach((item) => addToCart(item.id))
  }

  return (
    <main className="wishlist-page">
      <div className="wishlist-header">
        <div>
          <button className="back-btn" aria-label="Voltar" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <div className="wishlist-title-block">
            <h1>My Wishlist</h1>
            <p className="wishlist-subtitle">{items.length} items saved</p>
          </div>
        </div>

        <button className="share-btn-outline" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
            <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
          </svg>
          Share
        </button>
      </div>

      <div className="wishlist-actions">
        <button className="action-btn-outline" type="button" onClick={addAllToCart} disabled={items.length === 0}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Add All to Cart
        </button>
        <button className="action-btn-outline" type="button" onClick={clearWishlist} disabled={items.length === 0}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3,6 5,6 21,6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
          Clear Wishlist
        </button>
      </div>

      {items.length === 0 ? (
        <p className="wishlist-empty">Sua wishlist está vazia.</p>
      ) : (
        <div className="wishlist-grid">
          {items.map((item) => (
            <article className="wishlist-card" key={item.id}>
              <div className="wishlist-card-image">
                <div className="wishlist-card-badges">
                  <span className="discount-badge">-{item.discountPercent}%</span>
                  <span className="category-tag">{item.tag}</span>
                  {item.outOfStock && <span className="out-of-stock-tag">Out of Stock</span>}
                </div>
                <button
                  className="heart-btn heart-btn-active"
                  aria-label="Remover da wishlist"
                  onClick={() => removeItem(item.id)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <ProductImage image={item.image} alt={item.name} className="wishlist-card-photo" />
              </div>

              <div className="wishlist-card-info">
                <div className="wishlist-card-top-row">
                  <span className="wishlist-brand">{item.brand}</span>
                  <StarRating rating={item.rating} reviewsCount={item.reviewsCount} />
                </div>

                <p className="wishlist-name">{item.name}</p>

                <div className="wishlist-price-row">
                  <span className="price-current">${item.price}</span>
                  <span className="price-original">${item.originalPrice}</span>
                </div>

                <p className="wishlist-added">Added {item.addedDate}</p>

                <div className="wishlist-card-actions">
                  {item.outOfStock ? (
                    <button className="btn-notify" type="button" disabled>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                      Notify Me
                    </button>
                  ) : (
                    <button className="btn-add-to-cart-sm" type="button" onClick={() => addToCart(item.id)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      Add to Cart
                    </button>
                  )}
                  <button className="icon-btn-outline" aria-label="Remover" type="button" onClick={() => removeItem(item.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3,6 5,6 21,6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <section className="recommended-section">
        <h2>You Might Also Like</h2>
        <div className="recommended-grid">
          {recommendedItems.map((item) => (
            <article className="recommended-card" key={item.id}>
              <ProductImage image={item.image} alt={item.name} className="recommended-image" />
              <div className="recommended-info">
                <p className="recommended-name">{item.name}</p>
                <StarRating rating={item.rating} />
                <div className="recommended-bottom-row">
                  <span className="price-current">${item.price}</span>
                  <button className="btn-add-to-cart-sm" type="button" onClick={() => addToCart(item.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}