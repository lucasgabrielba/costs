import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/Company";
import Contact from "./components/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
