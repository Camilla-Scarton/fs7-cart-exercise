const CartItem = ({ handleClick, item: {id, title, price} }) => {
    return (
        <div>
            <p>{title}</p>
            <p>price: {price} €</p>
            <button onClick={() => handleClick(id)}>Remove from cart</button>
        </div>
    )
}

export default CartItem;