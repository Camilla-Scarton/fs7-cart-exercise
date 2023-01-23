const CartItem = ({ handleClick, item: {id, title, price, qnt} }) => {
    return (
        <div>
            <p>{title}</p>
            <p>price: {price} € x {qnt} = {price * qnt}</p>
            <button onClick={() => handleClick(id)}>Remove from cart</button>
        </div>
    )
}

export default CartItem;