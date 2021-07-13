import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { Price } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{Price(total_amount)}</span>
          </h5>
          <p>
            tax : <span>{Price(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total : <span>{Price(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            checkout
          </Link>
        ) : (
          <button onClick={loginWithRedirect} className="btn" type="button">
            Login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  @media (max-width: 400px) {
    h4,
    h5,
    p {
      display: grid;
      grid-template-columns: 100px 1fr;
      font-size: 1rem;
    }
  }
`;

export default CartTotals;
