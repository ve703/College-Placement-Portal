import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import ResponsiveDrawer from "./components/Sidebar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/AdminPannel/AdminDashboard";
import StudentDashboard from "./components/StudentPannel/StudentDashboard";

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
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          ></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
