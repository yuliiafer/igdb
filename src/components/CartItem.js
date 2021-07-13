import styled from "styled-components";
import { Price } from "../utils/helpers";
import Buttons from "./Buttons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <Wrapper>
      <div className="title">
        <img src={`${image}`} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{Price(price)}</h5>
        </div>
      </div>
      <h5 className="price">{Price(price)}</h5>
      <Buttons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{Price(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 50%;
    height: 50%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-red-dark);
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-grey-8);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  .remove-btn:hover {
    color: var(--clr-red-light);
    background: var(--clr-white);
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: 120px auto auto;
    grid-template-rows: 75px;
    gap: 0.5rem 0.5rem;
    justify-items: center;
    margin-bottom: 3rem;
    align-items: center;
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 55px 55px;
      align-items: center;
      text-align: left;
      gap: 0.1rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default CartItem;
