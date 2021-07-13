import styled from "styled-components";
import Product from "./Product";

const Content = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-container {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
  img {
    height: 250px;
    max-width: 100%;
  }
  .products-container {
    max-width: 100%;
  }
  @media (min-width: 450px) {
    .products-container {
      display: grid;
      gap: 2rem 1.5rem;
      grid-template-columns: repeat(2, 1fr);
      max-width: 100%;
    }
    img {
      height: 275px;
      width: 100%;
    }
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
    img {
      height: 375px;
      width: 100%;
    }
  }
`;

export default Content;
