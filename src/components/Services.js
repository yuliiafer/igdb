import styled from "styled-components";
import { services } from "../utils/services";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>Gaming...</h3>
          <p>
            Gaming takes more and more space in the modern world. We are helping
            you to choose the best games.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon} </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background: var(--clr-primary-9);

  h3,
  h4 {
    color: var(--clr-primary-6);
  }

  .header h3 {
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--clr-primary-4);
    margin: 1rem 0;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgb(0, 255, 245, 0.5) 100%
    );
    transition: var(--transition);
    max-width: 100%;
    padding: 1rem;
  }
  p {
    margin-top: 1rem;
    line-height: 1.8;
    color: var(--clr-grey-5);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 1rem 2rem 2rem 2rem;
    border-radius: var(--radius);
    clip-path: polygon(0 0, 100% 0, 100% 30vh, 50% 100%, 0 30vh);

    p {
      color: var(--clr-primary-2);
      text-align: left;
    }
  }
  span {
    width: 5rem;
    height: 5rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-7);
    color: var(--clr-primary-1);
    background: linear-gradient(145deg, #051124, #06142b);
    box-shadow: 14px 14px 28px #020810, -14px -14px 28px #0a1e40;
    svg {
      font-size: 3rem;
      color: var(--clr-primary-4);
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .header h3 {
      max-width: 80%;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;

    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
