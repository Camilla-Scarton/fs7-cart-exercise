import { Component } from "react"
import CartItem from "./_CartItem";
import Product from "./_Product";

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
    const itemIndex = this.state.cart.findIndex((item) => item.id === id);

    const _cart = [...this.state.cart];
    if (itemIndex === -1) {
      product.qnt = 1;
      _cart.push(product);
    } else {
      _cart[itemIndex].qnt += 1;
    }
    this.setState({
      cart: _cart
    });
  }

  removeFromCart = (id) => {
    const itemIndex = this.state.cart.findIndex((item) => item.id === id);
    let _cart = [...this.state.cart];
    if (this.state.cart[itemIndex].qnt === 1) {
      _cart = [...this.state.cart].filter((item) => item.id !== id);
    } else {
      _cart[itemIndex].qnt -= 1;
    }
    this.setState({
      cart: _cart
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
                  return <CartItem item={cartItem} handleClick={this.removeFromCart} />
                })
                :
                <p>Empty cart</p>
            }
          </div>
          <div>
            {
              this.state.cart.reduce(
                (prev, curr) => {
                  return prev + (curr.price * curr.qnt);
                }, 0
              )
            }
          </div>
        </div>
        <div>
          <h2>Prodotti</h2>
          <div>
            {
              this.state.products.map(product => {
                return <Product product={product} handleClick={this.onAddToCart} />
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

export default App;
