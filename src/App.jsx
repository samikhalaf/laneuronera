// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/shared/NavBar/NavBar";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ContactPage from "./components/pages/ContactPage/AboutPage";
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <main>
      <Router>
        
        <NavBar></NavBar>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </Router>
    </main>
  );
}

export default App;
