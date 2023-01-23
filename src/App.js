import { useState } from "react";
import CartItem from "./CartItem";
import Product from "./Product";

const App = () => {
    const [products] = useState([{
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
    }]);
    const [cart, setCart] = useState([]);

    const onAddToCart = (id) => {
        const product = products.find((product) => product.id === id)
        setCart([
            ...cart,
            product
        ])
    }

    const removeFromCart = (id) => {
        const _cart = cart.filter(element => element.id !== id)
        setCart(_cart)
    }

    return (
        <div>
            <div>
                <h2>Carrello</h2>
                <div>
                    {
                        cart.length > 0 ?
                            cart.map((cartItem, index) => {
                                return <CartItem item={cartItem} key={`item-${index}`} handleClick={removeFromCart} />
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
                        products.map((product, index) => {
                            return <Product product={product} key={`product-${index}`} handleClick={onAddToCart} />
                        })
                    }
                </div>
            </div>
        </div>
    )


}

export default App;