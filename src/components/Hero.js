import styled from "styled-components";
import { Link } from "react-router-dom";
import game1 from "../assets/game1.jpg";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game3.jpg";
import { useUserContext } from "../context/user_context";

const Hero = () => {
  const { myUser } = useUserContext();
  const { loginWithRedirect } = useUserContext();
  return (
    <Background>
      <Wrapper className="section-center">
        <article className="context">
          <h1>About Bits & Bots</h1>
          <p>
            At Bits & Bots, we believe that gaming is for everyone.
            We strive to make life more fun for billions of people around the world by creating gaming experiences that everyone can enjoy. Because when everyone plays, we all win.
          </p>
          {myUser ? (
          <Link to="/products" className="btn hero-btn">
            find your game
          </Link>
          ): (
            <button type="button" className="btn hero-btn" onClick={loginWithRedirect}>
            Log in
          </button>
          )}
        </article>
        <article className="img-container">
          <img src={game1} alt="game illustration" className="main-img" />
          <img src={game2} alt="game illustration" className="accent-img" />
        </article>
      </Wrapper>
    </Background>
  );
};
const Background = styled.div`
  background-image: linear-gradient(to right, blue 0%, red 100%), url(${game3});
  background-attachment: fixed;
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-origin: content-box;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 70vh, 50% 100%, 0 70vh );
`;
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-red-dark);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
