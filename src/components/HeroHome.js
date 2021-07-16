import styled from "styled-components";
import { Link } from "react-router-dom";
import game3 from "../assets/game3.jpg";
import { useUserContext } from "../context/user_context";
import Carousel from "./Carousel";
import { SliderData } from "./SliderData";

const HeroHome = () => {
  const { myUser } = useUserContext();
  const { loginWithRedirect } = useUserContext();
  
  return (
    <Background>
      <Wrapper className="section-center">
        <article className="context">
          <h1>Welcome to Bits & Bots</h1>
          <p>
            At Bits & Bots, we believe that gaming is for everyone. We strive to
            make life more fun for billions of people around the world by
            creating gaming experiences that everyone can enjoy. Because when
            everyone plays, we all win.
          </p>
          {myUser ? (
            <Link to="/products" className="btn hero-btn">
              find your game
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
        </article>
        <Carousel slides={SliderData} />
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
`;
const Wrapper = styled.section`
  min-height: 90vh;
  display: grid;
  place-items: center;

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1.2rem;
  }
  h1 {
    margin-bottom: 2rem;
    margin-top: 4rem;
    font-size: 1.8rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 3rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 4rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
  .slider {
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    max-width: 100%;
    width: 300px;
    height: 400px;
    border-radius: var(--radius);
    object-fit: cover;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    position: relative;
    border: 1px solid var(--clr-primary-5);
    transition: all 0.6s;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: -5px;
    font-size: 2rem;
    color: var(--clr-primary-4);
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: -5px;
    font-size: 2rem;
    color: var(--clr-primary-4);
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .slide {
    transform: scale(0.4);
    transition-duration: 1.5s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1.5s;
    transform: scale(1.1);
  }
  @media (max-width: 792px) {
    .image {
      width: 200px;
      height: 300px;
    }
  }
`;

export default HeroHome;
