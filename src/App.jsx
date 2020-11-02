// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/shared/NavBar/NavBar";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import HomePage from "./components/pages/HomePage/HomePage";
import Footer from "./components/shared/Footer/Footer";
// import Article from "./components/shared/Article/Article";

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

          <Route exact path="/:project">
            <HomePage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </main>
  );
}

export default App;
