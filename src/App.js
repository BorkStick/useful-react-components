import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavPage from "./pages/NavPage";
import TestPage from "./pages/TestPage";
import TopNavPage from "./pages/nav/TopNavPage";
import SidebarFixedRightPage from "./pages/nav/SidebarFixedRightPage";
import SidebarFixedLeftPage from "./pages/nav/SidebarFixedLeftPage";
import FooterPage from "./pages/nav/FooterPage";

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
