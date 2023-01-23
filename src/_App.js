import { Component } from "react"
import CartItem from "./_CartItem";
import Product from "./_Product";

const vouchers = [
  {
    name: "20-PR",
    type: 0, // % 
    value: 20
  },
  {
    name: "50-AM",
    type: 1, // valore
    value: 50
  }
];
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
    form: {
      code: "" 
    },
    activeCode: null
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

  handleInput = (event) => {
    const {value, name} = event.target;
    this.setState({
      form: {
        ...this.state.form, 
        [name]: value
      }
    })
  }
  
  handleAddCode = () =>  {
    if (this.state.form.code == ""){
      alert("Devi inserire un codice!")
      return ;
    }
    const code = vouchers.find(code => code.name == this.state.form.code)
    if (!code){
      alert("codice non valido!")
      this.setState({
        form: {
          ...this.state.form,
          code: ""
        }
      })
      return ;
    }else{
      this.setState({
        form: {
          ...this.state.form,
          code: ""        
        },
        activeCode: code
      })
    }
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
          <h2>Codici sconto</h2>
          <div>
            <input name="code" value={this.state.form.code} onInput={this.handleInput} type="text" placeholder="codice"/>
            <button onClick={this.handleAddCode}>Applica</button>
          </div>
          <div>
            <p>{this.state.activeCode?.name}</p>
            {
              this.state.activeCode &&
              <button>Rimuovi codice</button>
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
