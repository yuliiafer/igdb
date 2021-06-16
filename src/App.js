import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";
import { NavBar, SideBar, Footer } from "./layout";
import "./App.css";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={Error} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/private-route" component={PrivateRoute} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
