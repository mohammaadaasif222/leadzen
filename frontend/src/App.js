import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// app
function App() {
  return (
    <Router>
      <div className="row ">
      <NavBar/>
      </div>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <Footer />
      <ScrollTop />
      <CopyRight />
    </Router>
  );
}

export default App;
