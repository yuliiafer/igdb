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
  AuthWrapper
} from "./pages";
import { NavBar, SideBar, Footer } from "./layout";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <NavBar />
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <PrivateRoute exact path="/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute
            exact
            path="/products/:id"
            children={<SingleProduct />}
          />
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
};

export default App;
