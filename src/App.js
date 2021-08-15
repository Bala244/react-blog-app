import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./screens/Create";

export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/create" component={Create} />
        </div>
      </Switch>
    </Router>
  );
}
