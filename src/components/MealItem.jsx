import { currencyFormatter } from "../util/formatter.js";
import Button from "./UI/Button.jsx";

export default function MealItem({ meal }) {
  function handleClick() {
    console.log("click the button");
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
          <Button onClick={handleClick}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
