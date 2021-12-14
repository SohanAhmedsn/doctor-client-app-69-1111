import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Home/AppointmentBanner/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// start next day 70_6
