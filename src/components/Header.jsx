import { useContext } from "react";
import Button from "../components/UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const CartCxt = useContext(CartContext);

  const totalCartItems = CartCxt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleClick() {
    console.log("111");
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
