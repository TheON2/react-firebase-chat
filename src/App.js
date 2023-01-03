import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import ChatPage from "./components/ChatPage/ChatPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ChatPage}/>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/" component={RegisterPage}/>
      </Switch>
    </Router>
  );
}

export default App;
