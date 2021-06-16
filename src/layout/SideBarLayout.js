import { Link } from "react-router-dom";
import { links } from "../utils/links";
import styled from "styled-components";
import logo from "../assets/icon.png";
import { FaTimes } from "react-icons/fa";
import CartIcons from "../components/CartIcons";

const SideBar = () => {
  const isOpen = false;
  return (
    <SideBarContainer>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar__header">
          <img src={logo} className="sidebar__logo" alt="bits and bots" />
          <button type="button" className="close__btn">
            <FaTimes size="1.5em" />
          </button>
        </div>
        <ul className="sidebar__links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <CartIcons />
      </aside>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  text-align: center;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close__btn {
    background: transparent;
    border: none;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
    float: right;
    padding: 1.6rem;
  }
  .close__btn:hover {
    color: var(--clr-red-light);
  }
  .sidebar__logo {
    height: 45px;
    padding: 1rem 0 0 1rem;
    float: left;
  }
  .sidebar__links {
    margin: 2rem;
    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--clr-grey-3);
      transition: var(--transition);
      letter-spacing: var(--spacing);

      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
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
    transform: translate(-100%);
    z-index: 1;
  }
  .show-slidebar {
    transform: translate(0);
    z-index: 999;
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
