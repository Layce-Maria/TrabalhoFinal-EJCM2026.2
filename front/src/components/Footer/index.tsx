import "./Footer.css"

export function Footer() {
    return (
        <footer className="footer">
        <h1 className="footer-title">Stay in Style</h1>
        <p className="footer-description">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
        </p>

        <form className="footer-form">
            <input
            type="email"
            placeholder="Enter your email"
            required
            />
            <button type="submit">Subscribe</button>
        </form>
        </footer>
    )
}