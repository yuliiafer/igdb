import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/bb.png";

const ErrorPage = () => {
  return (
    <Wrapper className="page-404">
      <section>
        <img src={logo} alt="logo error page" />
        <h1>404</h1>
        <h3>Sorry, the page can not be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    height: 10rem;
  }
  h1 {
    font-size: 8rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
