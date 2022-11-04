import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { increaseCartItemQuantity, decreaseCartItemQuantity, removeItemFromCart } = useContext(CartContext);
    const removeCartItem = () => removeItemFromCart(cartItem);

    const addQuantity = () => {
        increaseCartItemQuantity(cartItem);
    }
    const minusQuantity = () => {
        decreaseCartItemQuantity(cartItem);
    }

    return (<div className="checkout-item">
        <div className="checkout-item-content">
            <div className="checkout-item-image">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="checkout-item-name">{name}</span>
            <span className="checkout-item-quantity"><button onClick={addQuantity}>+</button>{quantity}<button onClick={minusQuantity}>-</button></span>
            <span className="checkout-item-price">${price}</span>
            <span className="checkout-item-remove"><button onClick={removeCartItem}>X</button></span>
        </div>
    </div>);
}
export default CheckoutItem;