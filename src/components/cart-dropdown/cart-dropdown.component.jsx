import { useContext, useState } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.style.scss";


const CartDropdown = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items-container">
                {cartItems.length ?
                    (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )))
                    : <div className="empty-message">Your cart is empty</div>
                }
            </div>
            <Button>GO TO CHEKOUT</Button>
        </div>
    );
};

export default CartDropdown;


 //  ? (cartItems.forEach(el => el.quantity = 0),
                    //     cartItems.map((item, index) => {
                    //         if (item.quantity === 0) {
                    //             item.quantity++;
                    //             return <CartItem key={index} cartItem={item} />;
                    //         }
                    //         if (cartItems.includes(item) && item.quantity > 0) {
                    //             item.quantity++;
                    //         }
                    //     }))