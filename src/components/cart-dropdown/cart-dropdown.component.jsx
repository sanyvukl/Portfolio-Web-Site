import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.style.scss";
// import { CartContext } from "../../contexts/cart-products.context";

const CartDropdown = ({ isCartOpen }) => {
    // const { cartProducts } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items-container">
                {/* {cartProducts.map(({ id, name, imageUrl, price, }) => {
                    return (
                        <div key={id} className="cart-item" >
                            <img className="cart-item-image" src={imageUrl} alt={name} />
                            <div className="cart-item-description">
                                <div className="cart-item-name">{name}</div>
                                <div className="cart-item-price">1 x ${price}</div>
                            </div>
                        </div>
                    )
                })}; */}
            </div>
            <Button>GO TO CHEKOUT</Button>
        </div>
    );
};

export default CartDropdown;
