import './HomeBanner.css' 
import { ArrowRight } from 'lucide-react'

export function HomeBanner() {
    return(
        <header className = "homeBanner">

            <h1 className = "slogan">Style Redefined</h1>
            <p className = "description">Discover the latest trends in fashion. Premium quality,
sustainable materials, timeless designs.</p>

            <div className = "banner-buttons">
                <a className = "shopNow" href="https://link-do-postman.com" target="_blank" rel="noopener noreferrer">
                Shop Now <ArrowRight size={18} />
                </a>

                <a className = "viewCollection" href="https://link-do-postman.com" target="_blank" rel="noopener noreferrer">
                View Collection
                </a>
            </div>

        </header>
    )
}