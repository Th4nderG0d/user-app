import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";

function App() {

  
  return (
    <Router>
      <div className="App">
      <Navigation/>
        <Switch>
        <Route path="/" exact>
            <Welcome/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />/
          </Route>
         
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="*" ><Welcome/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
