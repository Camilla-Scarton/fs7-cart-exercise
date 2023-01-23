import { Component } from "react"

class Product extends Component {
    // this.props.handleClick() per triggerare il click
    // this.props.product = { id, title, price }
    render() {
        const { handleClick, product: {id, title, price} } = this.props;
        return (
            <div className="product">
                <p>{title}</p>
                <p>price: {price} €</p>
                <button onClick={() => handleClick(id)}>Add to cart</button>
            </div>
        )
    }

} 

export default Product;