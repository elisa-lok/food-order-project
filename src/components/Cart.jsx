import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import CartItem from "./CartItem.jsx";
import { currencyFormatter } from "../util/formatter.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCxt = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCxt.hideCart();
  }

  function handleCheckout() {
    userProgressCxt.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCxt.progress === "cart"}
      onClose={userProgressCxt.progress === "cart" ? handleClose : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textButton onClick={handleClose}>
          Close
        </Button>
        <Button onClick={handleCheckout}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
