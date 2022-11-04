import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./chekout.style.scss";

const Checkout = () => {
    const { cartItems, totalValue } = useContext(CartContext);
    return <div className="checkout-container">
        <div className="checkout-header">
            <div>Product</div>
            <div>Description</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Remove</div>
        </div>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
        <div className="total">Total: ${totalValue}</div>
    </div>
}

export default Checkout;