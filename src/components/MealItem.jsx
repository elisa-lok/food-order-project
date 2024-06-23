export default function MealItem({ key, meal }) {
  return (
    <li key={key} id="meals">
      <div className="meal-item">
        <article>
          <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <div className="meal-item-price">{meal.price}</div>
            <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal-item-actions">
            <button>Add to cart</button>
          </p>
        </article>
      </div>
    </li>
  );
}
