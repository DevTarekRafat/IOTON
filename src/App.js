import "./App.css";
import Landing from "./pages/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Privacy from "./pages/Privacy/Privacy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Team from "./pages/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
