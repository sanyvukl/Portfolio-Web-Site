import { ProductCardContainer, ProductFooter } from "./product-card.style";
import Button, { BUTTONS_TYPE_CLASSES } from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price } = product;
    
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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