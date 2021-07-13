import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Price } from "../utils/helpers";
import AddToCart from "./AddToCart";
import Stars from "./Stars";

const Product = ({ name, price, stock, stars, reviews, id, image }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
        <Link className="h5" to={`/products/${id}`}>
          <h5>{name}</h5>
        </Link>
        <Stars stars={stars} reviews={reviews} />
      </div>
      <footer>
        <h5>{name.substring(0, 15)}...</h5>
        <p>{Price(price)}</p>{" "}
      </footer>
      {stock > 0 && (
        <AddToCart
          product={{
            name,
            price,
            stock,
            stars,
            reviews,
            id,
            image,
          }}
        />
      )}
      <hr></hr>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-bottom: 2rem;
  .container {
    position: relative;
    border-radius: var(--radius);
  }
  .amount-btsn {
    display: none;
  }
  .btn-container {
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  hr {
    margin-top: 1rem;
    opacity: .1;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .h5 {
    position: absolute;
    top: 0%;
    left: 0%;
    background: var(--clr-grey-9);
    width: 100%;
    height: 4rem;
    border-radius: var(--radius);
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    padding: 1.5rem 1rem;
    color: var(--clr-black);
    h5 {
      letter-spacing: var(--spacing)/2;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  .container:hover .h5 {
    opacity: 0.6;
  }
  footer {
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 12px;
    display: block;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  @media (min-width: 550px) {
    footer {
      display: flex;
    }
    footer h5,
    footer p {
      font-size: 16px;
    }
  }
`;
export default Product;
