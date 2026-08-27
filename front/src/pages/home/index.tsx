import { HomeBanner } from '../../components/HomeBanner'
import { IconGroup } from '../../components/IconGroup'
import { Categories } from '../../components/Categories'
import { Products } from '../../components/Products'
import { Footer } from '../../components/Footer'
import './home.css'

export function Home() {
    return (
        <div className="home">
        <HomeBanner />
        <IconGroup />
        <Categories />
        <Products />
        <Footer />
        </div>
    )
}