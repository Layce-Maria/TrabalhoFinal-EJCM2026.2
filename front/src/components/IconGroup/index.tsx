import "./iconGroup.css"
import { Truck, Shield, RotateCcw } from 'lucide-react'

export function IconGroup(){
    return(
        <div className = "iconGroup">
            <div className = "shipping">
                <div className="icon-circle">
                    <Truck size = {32} color = "black"/>
                </div>
                <h3>Free Shipping</h3>
                <p>Free shipping on orders over $100</p>
            </div>

            <div className = "returns">
                <div className="icon-circle">
                    <RotateCcw size = {32} color = "black"/>
                </div>
                <h3>Easy Returns</h3>
                <p>30-day hassle-free returns</p>
            </div>

            <div className = "payment">
                <div className="icon-circle">
                    <Shield size = {32} color = "black"/>
                </div>
                <h3>Secure Payment</h3>
                <p>Your payment information is safe</p>
            </div>
        </div>
    )
}