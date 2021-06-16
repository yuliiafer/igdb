import styled from "styled-components";
import logo from "../assets/icon.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBarLayout = () => {
  return (
    <NavContainer>
      <div className="nav__center">
        <div className="nav__header">
          <Link to="/">
            <img src={logo} alt="bits and bots" />
          </Link>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav__center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50px;
      margin-left: -15px;
      height: 50px;
    }
  }
`;

export default NavBarLayout;
