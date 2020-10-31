// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./shared/NavBar/NavBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";

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
  )}

export default App;
