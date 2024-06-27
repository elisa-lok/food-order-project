import { useContext } from "react";
import Button from "../components/UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const CartCxt = useContext(CartContext);
  const userProgressCxt = useContext(UserProgressContext);

  const totalCartItems = CartCxt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleClick() {
    userProgressCxt.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="food order" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textButton onClick={handleClick}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
