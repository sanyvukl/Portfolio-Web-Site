import { useContext } from "react";
import "./product-card.style.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart-products.context";
const ProductCard = ({ product }/* destructured */) => {
    const { name, imageUrl, price } = product;
    const { setCartProducts } = useContext(CartContext);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="product-footer">
                <span className="product-name">{name}</span>
                <span className="product-price">${price}</span>
            </div>
            <Button buttonType="inverted" onClick={() => (setCartProducts((prevValue) => [...prevValue, product]))}>Add to cart</Button>
        </div>
    )
};

export default ProductCard;