import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import styled from "styled-components";
import { VscClose, VscArrowLeft } from "react-icons/vsc";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          <VscArrowLeft />
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
          <VscClose size="1.5em" />
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: space-between;
    svg {
      margin-right: 0.3rem;
    }
  }
  .link-btn:hover {
    color: var(--clr-black);
    background: var(--clr-primary-4);
  }
  .clear-btn {
    background: var(--clr-black);
    align-items: center;
    display: flex;
    justify-content: space-between;
    svg {
      margin-left: 0.3rem;
      color: var(--clr-red-light);
    }
  }
`;
export default CartContent;
