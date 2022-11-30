import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";
export const Cartwidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <>
      <span>{totalProducts() || ""}</span>
      <BsFillCartFill className="logo-carrito" />
    </>
  );
};
export default Cartwidget;
