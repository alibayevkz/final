
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Logo from "./components/Navbar/Logo";
import About from "./components/About";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar logo={<Logo text={"Marvel Heroes Finder"} />}>
        <NavItem to={"/"} text={"Home"} />
        <NavItem to={"/about"} text={"Favourite Heroes"} />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
