import Button from "../components/UI/Button.jsx";

export default function Header() {
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
          Cart(0)
        </Button>
      </nav>
    </header>
  );
}
