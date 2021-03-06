import { Link } from "react-router-dom";
import styled from "styled-components";
import Games from "./Games";
import { useUserContext } from "../context/user_context";

const Feature = () => {
  const { myUser } = useUserContext();
  const { loginWithRedirect } = useUserContext();

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Popular games</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        <Games />
      </div>
      {myUser ? (
        <Link to="/products" className="btn">
          all games
        </Link>
      ) : (
        <button
          type="button"
          className="btn hero-btn"
          onClick={loginWithRedirect}
        >
          Log in
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 1rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 376px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
    }
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
      gap: 2rem;
    }
  }
`;

export default Feature;
