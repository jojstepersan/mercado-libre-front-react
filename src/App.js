import './assets/css/App.scss';
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import history from "./service/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/items/:itemId" component={ Home } />
        <Route exact path="/items?search=" component={ Home } />
        <Route path="/"component={ Home }  />
      </Switch>
    </Router>
  );
}

export default App;
