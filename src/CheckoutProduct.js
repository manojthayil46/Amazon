import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, ratings }) {
  const [state, dispatch] = useStateValue();
  console.log(id + image + title, +price, ratings);

  const deleteItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__image" src={image} />
      <div className="CheckoutProduct__info">
        <p className="Checkout__title">{title}</p>
        <p className="Checkout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__ratings">
          {Array(ratings)
            .fill()
            .map((_, index) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={deleteItem}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
