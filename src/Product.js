const Product = ({ handleClick, product: { id, title, price } }) => {
  return (
    <div className="product">
      <p>{title}</p>
      <p>price: {price} €</p>
      <button onClick={() => handleClick(id)}>Add to cart</button>
    </div>
  );
};

export default Product;
