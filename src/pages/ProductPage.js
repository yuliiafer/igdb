import styled from "styled-components";
import { List, PageHero, Filters, Sort } from "../components";

const ProductPage = () => {
  return (
    <main>
      <PageHero title="Games" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <List />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default ProductPage;
