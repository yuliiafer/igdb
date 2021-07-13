import { Link } from "react-router-dom";
import { links } from "../utils/links";
import styled from "styled-components";
import logo from "../assets/logobb.png";
import { FaTimes } from "react-icons/fa";
import CartIcons from "../components/CartIcons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <SideBarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="bits and bots" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes size="1.5em" />
          </button>
        </div>
        <ul className="nav-links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <>
              <li>
                <Link to="/products" onClick={closeSidebar}>
                  Games
                </Link>
              </li>
              <li>
                <Link to="/checkout" onClick={closeSidebar}>
                  Checkout
                </Link>
              </li>
            </>
          )}
        </ul>
        <CartIcons />
      </aside>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 1rem;
  }
  .close-btn {
    background: transparent;
    border: none;
    color: var(--clr-grey-5);
    transition: var(--transition);
    cursor: pointer;
    margin: 0.2rem;
    float: right;
  }
  .close-btn:hover {
    color: var(--clr-grey-2);
  }
  .logo {
    height: 80px;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  .nav-links {
    margin: 2rem;
    a {
      display: block;
      text-align: left;
      font-size: 1.5rem;
      text-transform: capitalize;
      padding: 1rem 0rem;
      color: var(--clr-grey-3);
      transition: var(--transition);
      letter-spacing: var(--spacing);

      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-7);
        color: var(--clr-grey-10);
      }
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    background: var(--clr-grey-1);
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SideBar;
