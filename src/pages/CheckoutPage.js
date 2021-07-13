import styled from "styled-components";
import { PageHero, Stripe } from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Cart is empty</h2>
            <Link to="/products" className="btn">
              find your game
            </Link>
          </div>
        ) : (
          <Stripe />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  min-height: calc(100vh - 12rem);
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
  h2 {
    margin-bottom: 3rem;
    text-transform: none;
  }
`;
export default CheckoutPage;
