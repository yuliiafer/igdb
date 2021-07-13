import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Games </Link>}/{title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  box-shadow: -3px 3px 5px #0e1014, 3px -3px 5px #2d3440;
  width: 100%;
  min-height: 1vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  padding: 0.5rem;
  a {
    color: var(--clr-primary-3);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-4);
  }
  h3 {
    font-size: 0.875rem;
    font-style: normal;
    padding: 0.5rem 0;
    font-weight: 300;
    letter-spacing: var(--spacing);
  }
`;

export default PageHero;
