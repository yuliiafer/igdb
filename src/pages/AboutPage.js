import styled from "styled-components";
import PageHero from "../components/PageHero";
import game3 from "../assets/game3.jpg";
import { Hero } from "../components";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Hero />
      <Wrapper className="page section section-center">
        <img src={game3} alt="hero" />
        <article>
          <div className="title">
            <h2>Gaming</h2>
            <div className="underline"></div>
          </div>
          <p>
            Nothing should come between you and the games you love. We strive to
            eliminate barriers, and to empower gamers to customize the way they
            play. Gaming is a fun part of a balanced life. We strive to create a
            place where everyone can play responsibly, within the boundaries
            they set, free from fear and intimidation.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
