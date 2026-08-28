import { useContext, useEffect, useState } from 'react'
import './wishlist.css'
import { api } from '../../services/api'
import { AuthContext } from '../../contexts/AuthContext'
import premium from '../../assets/products/premium.jpg'
import boots from '../../assets/products/boots.jpg'
import jeans from '../../assets/products/jeans.jpg'
import hoodie from '../../assets/products/hoodie.jpg'

type WishlistApiItem = {
  userId: string
  productId: string
  createdAt: string
  product: {
    name: string
    price: number
    rating: number | null
  }
}

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

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="rating">
      <svg viewBox="0 0 24 24" className="star star-filled">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      {rating}
    </span>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR')
}

export function Wishlist() {
  const { user } = useContext(AuthContext)
  const [items, setItems] = useState<WishlistApiItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    let active = true
    setLoading(true)
    setError(null)

    api
      .get<WishlistApiItem[]>(`/wishlist/${user.id}`)
      .then((response) => {
        if (active) setItems(response.data)
      })
      .catch(() => {
        if (active) setError('Não foi possível carregar sua wishlist.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [user])

  const removeItem = async (productId: string) => {
    if (!user) return
    const previousItems = items
    setItems((current) => current.filter((item) => item.productId !== productId))
    try {
      await api.delete(`/wishlist/${user.id}/product/${productId}`)
    } catch {
      setItems(previousItems)
    }
  }

  const clearWishlist = async () => {
    if (!user) return
    const previousItems = items
    setItems([])
    try {
      await api.delete(`/wishlist/${user.id}`)
    } catch {
      setItems(previousItems)
    }
  }

  const addToCart = (productId: string) => {
    console.log('Add to cart:', productId)
  }

  const addAllToCart = () => {
    items.forEach((item) => addToCart(item.productId))
  }

  if (!user) {
    return (
      <main className="wishlist-page">
        <p className="wishlist-empty">Faça login para ver sua wishlist.</p>
      </main>
    )
  }

  if (loading) {
    return (
      <main className="wishlist-page">
        <p className="wishlist-empty">Carregando sua wishlist...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="wishlist-page">
        <p className="wishlist-empty">{error}</p>
      </main>
    )
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
            <article className="wishlist-card" key={item.productId}>
              <div className="wishlist-card-image">
                <button
                  className="heart-btn heart-btn-active"
                  aria-label="Remover da wishlist"
                  onClick={() => removeItem(item.productId)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <ProductImage alt={item.product.name} className="wishlist-card-photo" />
              </div>

              <div className="wishlist-card-info">
                <div className="wishlist-card-top-row">
                  <StarRating rating={item.product.rating ?? 0} />
                </div>

                <p className="wishlist-name">{item.product.name}</p>

                <div className="wishlist-price-row">
                  <span className="price-current">${item.product.price}</span>
                </div>

                <p className="wishlist-added">Added {formatDate(item.createdAt)}</p>

                <div className="wishlist-card-actions">
                  <button className="btn-add-to-cart-sm" type="button" onClick={() => addToCart(item.productId)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Add to Cart
                  </button>
                  <button
                    className="icon-btn-outline"
                    aria-label="Remover"
                    type="button"
                    onClick={() => removeItem(item.productId)}
                  >
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
                  <button className="btn-add-to-cart-sm" type="button">
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
