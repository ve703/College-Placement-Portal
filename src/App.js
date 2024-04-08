import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import ResponsiveDrawer from "./components/Sidebar";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer />
        {/* only keeps hamburger icon on entire page <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ourTeam" element={<OurTeam />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/candidate" element={<StudentInfo/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
