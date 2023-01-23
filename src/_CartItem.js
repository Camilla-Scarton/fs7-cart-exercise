import { Component } from "react";

class CartItem extends Component {
    // renderizzare gli articoli del carrello
    // this.props.item = {id, title, price}
    render() {
        const { handleClick, item: {id, title, price} } = this.props;
        return (
            <div>
                <p>{title}</p>
                <p>price: {price} €</p>
                <button onClick={() => handleClick(id)}>Remove from cart</button>
            </div>
        )
    }

}

export default CartItem;