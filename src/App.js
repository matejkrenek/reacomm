import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "./redux/store"
import { Home, Cart } from "./pages"
import { Navbar } from "./components";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
