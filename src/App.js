import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/portfolio" element={<Portfolio />} />
        <Route exact={true} path="/competence" element={<Knowledges />} />
        <Route exact={true} path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
