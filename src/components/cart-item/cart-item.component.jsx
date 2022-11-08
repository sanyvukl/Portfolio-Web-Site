import {CartItemContainer, CartItemImage, CartItemDescription} from "./cart-item.style";

const CartItem = ({cartItem}) =>{
    const {id, name, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer key={id} >
            <CartItemImage src={imageUrl} alt={name} />
            <CartItemDescription>
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-price">{quantity} x ${price}</div>
            </CartItemDescription>
        </CartItemContainer>
    )
}

export default CartItem;

