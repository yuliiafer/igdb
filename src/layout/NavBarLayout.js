import styled from "styled-components";
import logo from "../assets/icon.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/links";

const NavBarLayout = () => {
  return (
    <NavContainer>
      <div className="nav__center">
        <div className="nav__header">
          <Link to="/">
            <img src={logo} alt="bits and bots" />
          </Link>
          <button type="button" className="nav__toggle">
            <FaBars size="1.5em" />
          </button>
        </div>
        <ul className="nav__links">
            {links.map((link) => {
                const {id, text, url} = link;
                return <li key={id}>
                            <Link to={url}>
                                {text}
                            </Link>
                        </li>
            })}
        </ul>
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

  .nav__toggle {
      background: transparent;
      border: transparent;
      color: var(--clr-primary-5);
      cursor: pointer;
  }

  .nav__links {
      display: none;
  }

  .cart-btn-wrapper {
      display: none;
  }

  @media (min-width: 992px) {
      .nav__toggle {
          display: none;
      }
      .nav__center {
          display: grid;
          grid-template-column: auto 1fr auto;
          align-items: center;
      }

      .nav__links {
          display: flex;
          justify-content: center;

          li {
              margin: 0 0.5rem;
          }

          a {
              color: var(--clr-grey-3);
              font-size: 1rem;
              text-transform: capitalize;
              letter-spacing: var:(--spacing);
              padding: 0.5rem;

              &:hover {
                  border-bottom: 2px solid var(--clr-primary-7);
              }
          }
      }
  }
`;

export default NavBarLayout;
