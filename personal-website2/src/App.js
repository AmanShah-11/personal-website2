import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
