import { Component } from "react"
import CartItem from "./CartItem";
import Product from "./Product";

class App extends Component {

  state = {
    products: [{
      id: 1,
      title: "Crostoli",
      price: 18,
    },
    {
      id: 2,
      title: "Frittelle",
      price: 10,
    },
    {
      id: 3,
      title: "Pizzetta",
      price: 4,
    }],
    cart: [],
  }

  onAddToCart = (id) => {
    const product = this.state.products.find(product => product.id == id)
    this.setState({
      cart: [
        ...this.state.cart,
        product,
      ]
    })
  }

  removeFromCart = (id) => {
    const cart = [...this.state.cart].filter(element => element.id != id)
    this.setState({
      cart,
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Carrello</h2>
          <div>     
            {
              this.state.cart.length > 0 ?
              this.state.cart.map(cartItem => {
                return <CartItem item={cartItem} handleClick={this.removeFromCart}/>
              })
              : 
              <p>Empty cart</p>
            }
          </div>
        </div>
        <div>
          <h2>Prodotti</h2>
          <div>
            {
              this.state.products.map(product => {
                return <Product product={product} handleClick={this.onAddToCart}/>
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

export default App;
