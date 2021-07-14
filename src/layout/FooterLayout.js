import styled from "styled-components";

const FooterLayout = () => {
  return (
    <Wrapper>
      <h6>
        &copy; {new Date().getFullYear()}
        <span>Bits & Bots</span>
      </h6>
      <h6>API and games info:</h6>
      <span>https://www.igdb.com</span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
    margin-left: .5rem;
  }
  h6 {
    color: var(--clr-white);
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: none;
    line-height: 1.5;
    &:first-child {
    margin-right: .5rem;
  }
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default FooterLayout;
