import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import NavPage from "./pages/nav-page";
import TestPage from "./pages/test-page";
import TopNavPage from "./pages/nav/top-nav-page";
import SidebarFixedRightPage from "./pages/nav/sidebar-fixed-right-page";
import SidebarFixedLeftPage from "./pages/nav/sidebar-fixed-left-page";
import FooterPage from "./pages/nav/footer-page";

function App() {
  return (
    <div className="App">
      <Router>
       

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/nav">
            <NavPage />
          </Route>
          <Route exact path="/test-page">
            <TestPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/nav/topnav">
            <TopNavPage />
          </Route>
          <Route exact path="/nav/side-nav-right">
            <SidebarFixedRightPage />
          </Route>
          <Route exact path="/nav/side-nav-left">
            <SidebarFixedLeftPage />
          </Route>
          <Route exact path="/nav/footer">
            <FooterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
