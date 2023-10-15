import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import About from "../src/pages/About.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import Services from "./pages/Services";
import Policy from "./pages/Policy.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
