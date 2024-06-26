import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatter.js";
import Button from "./UI/Button.jsx";

export default function MealItem({ meal }) {
  const CartCxt = useContext(CartContext);

  function addToCart() {
    CartCxt.addItem({ meal });
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <div className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </div>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={addToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
