import { Route, Switch } from "react-router-dom"

import { Home, Cart } from "./pages"
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
