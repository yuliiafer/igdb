import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const Buttons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className="amount-btsn">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(---clr-white);
  }
  @media (max-width: 450px) {
    width: 100px;
    button {
      padding: 0.5rem 0;
      width: 0.8rem;
      height: 0.5rem;
    }
  }
`;
export default Buttons;
