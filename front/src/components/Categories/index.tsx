import "./Categories.css"
import womenImg from "../../assets/womans.jpeg"
import menImg from "../../assets/mens.jpg"
import accessoriesImg from "../../assets/accessories.jpeg"
import shoesImg from "../../assets/shoes.jpeg"

export function Categories(){
    return(
        <section className = "categories">
            <h1 className="categories-title">Shop by Category</h1>
            <p className="categories-description">Explore our carefully curated collections for every style and occasion</p>

            <div className="category-list">
                <div className="category-item">
                    <img src={womenImg} alt="Roupas Femininas" />
                    <div className="category-info">
                        <h3>Woman's Fashion</h3>
                        <p>500+ itens</p>
                    </div>
                </div>

                <div className="category-item">
                    <img src={menImg} alt="Roupas Masculinas" />
                    <div className="category-info">
                        <h3>Men's Fashion</h3>
                        <p>350+ itens</p>
                    </div>
                </div>

                <div className="category-item">
                    <img src={accessoriesImg} alt="Acessórios" />
                    <div className="category-info">
                        <h3>Accessories</h3>
                        <p>200+ itens</p>
                    </div>
                </div>

                <div className="category-item">
                    <img src={shoesImg} alt="Calçados" />
                    <div className="category-info">
                        <h3>Shoes</h3>
                        <p>180+ itens</p>
                    </div>
                </div>
            </div>
        </section>
    )
}