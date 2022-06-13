import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./root.css";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4560);
  }, []);

  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading === false ? (
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
              <About />
              <Work />
              <Contact />
              <Footer />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
