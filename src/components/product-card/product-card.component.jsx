import { useContext } from "react";
import {ProductCardContainer, ProductFooter} from "./product-card.style";
import Button, { BUTTONS_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }/* destructured */) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <ProductFooter>
                <span className="product-name">{name}</span>
                <span className="product-price">${price}</span>
            </ProductFooter>
            <Button buttonType={BUTTONS_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
};

export default ProductCard;