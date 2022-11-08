import { useContext } from "react";
import "./product-card.style.scss";
import Button, { BUTTONS_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }/* destructured */) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="product-footer">
                <span className="product-name">{name}</span>
                <span className="product-price">${price}</span>
            </div>
            <Button buttonType={BUTTONS_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
};

export default ProductCard;