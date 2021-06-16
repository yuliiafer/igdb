import { Link } from "react-router-dom";
import { FaShoppingBasket, FaUserPlus, FaUserMinus } from "react-icons/fa";
import styled from "styled-components";

const CartIcons = () => {
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart__btn">
        <span className="cart__container">
          <FaShoppingBasket />
          <span className="cart__value">0</span>
        </span>
      </Link>
      <button type="button" className="login__btn">
        <FaUserPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart__btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    .cart__container {
      display: flex;
      align-items: center;
      position: relative;

      svg {
        height: 1.6rem;
        margin-left: 5px;
      }

      .cart__value {
        display: flex;
        align-items: center;
        position: absolute;
        top: -10px;
        right: -16px;
        background: var(--clr-primary-5);
        color: var(--clr-white);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        font-size: 0.75rem;
        padding: 12px;
      }
    }
  }

  .login__btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

    svg {
        margin-left: 5px;
    }
}
`;

export default CartIcons;
