import styled from "styled-components";
import logo from "../assets/logobb.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/links";
import CartIcons from "../components/CartIcons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const NavBarLayout = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="bits and bots" />
          </Link>
          <CartIcons />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars size="1.5em" />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <>
              <li>
                <Link to="/products">games</Link>
              </li>
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            </>
          )}
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
  background: var(--clr-black);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img { 
      height: 80px;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
      z-index: 99999;
      padding-top: 1rem;
      padding-right: 3rem;
      max-width: 100%;
      @media (max-width: 492px) {
        height: 60px;
        padding-right: 0;
      }
    }
  }
  .nav-toggle {
      background: transparent;
      border: transparent;
      color: var(--clr-primary-5);
      cursor: pointer;
  }
  .nav-links {
      display: none;
  }
  @media (min-width: 992px) {
      .nav-toggle {
          display: none;
      }
      .nav-center {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          -webkit-align-items: center;
      }
      .nav-links {
          display: flex;
          justify-content: flex-end;
          a {
              color: var(--clr-grey-3);
              font-size: 1.3rem;
              text-transform: capitalize;
              letter-spacing: var:(--spacing);
              padding: 1.5rem;
              padding-bottom: 1.5rem;
              transition: var(--transition);
              
              &:hover {
                  border-bottom: 2px solid var(--clr-primary-4);
              }
          }
      }
      .cart-btn-wrapper {
        display: grid;
    }
  }
`;

export default NavBarLayout;
