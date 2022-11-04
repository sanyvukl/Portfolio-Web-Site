import "./cart-item.style.scss";

const CartItem = ({cartItem}) =>{
    const {id, name, imageUrl, price, quantity } = cartItem;

    return (
        <div key={id} className="cart-item" >
            <img className="cart-item-image" src={imageUrl} alt={name} />
            <div className="cart-item-description">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-price">{quantity} x ${price}</div>
            </div>
        </div>
    )
}

export default CartItem;