import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Home/AppointmentBanner/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;

// start next day 70_6
