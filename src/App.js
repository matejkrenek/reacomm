import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "./redux/store"
import { Home, Cart, Checkout, NotFound } from "./pages"
import { Navbar } from "./components";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
