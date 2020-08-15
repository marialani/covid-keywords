import React from "react";
// Pages
import Home from "./pages/Home";
import Chart from "./components/Chart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import KeywordsList from "./pages/KeywordsList";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/keywords" component={() => <KeywordsList />} />
          <Route path="/keywords/:keyword" component={() => <Chart />} />
          {/* <Route render={() => <h1>Page not found</h1>} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
