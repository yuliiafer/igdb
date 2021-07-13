import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { ImUserMinus, ImUserPlus } from "react-icons/im";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartIcons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <GiShoppingBag />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clearCart();
            localStorage.removeItem("user");
            logout({ returnTo: window.location.origin });
          }}
        >
          <ImUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          <ImUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 225px;
  align-items: center;
  .cart-btn {
    color: var(--clr-grey-5);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center; 
    .cart-container {
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center; 
      svg {
        height: 1.6rem;
        margin-left: 5px;
      }
      .cart-value {
        display: flex;
        align-items: center;
        position: absolute;
        top: -5px;
        right: -18px;
        background: var(--clr-primary-9);
        color: var(--clr-primary-4);
        border-radius: 50%;
        font-size: 0.75rem;
        padding: 2px;
      }
    }
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-5);
    justify-content: center; 
    svg {
      margin-left: 5px;
    }
  }
  @media (max-width: 550px) {
    width: 100px;
    .cart-btn {
      .cart-container {
        .cart-value {
          display: flex;
          align-items: center;
          position: absolute;
          top: -5px;
          right: -12px;
          background: var(--clr-primary-9);
          color: var(--clr-primary-4);
          border-radius: 50%;
          font-size: 0.55rem;
          padding: 2px;
        }
  }
`;

export default CartIcons;
