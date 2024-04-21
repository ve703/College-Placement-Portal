import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/AppHome/Home";
import PlacementStat from "./components/AppHome/PlacementStat";
import Recruitment from "./components/AppHome/Recruitment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminList from "./components/AdminPannel/AdminList";
import StudentInfo from "./components/StudentInfo";
import AdminEvents from "./components/AdminPannel/AdminEvents";
import OurTeam from "./components/AppHome/OurTeam";
import Contact from "./components/AppHome/Contact";
import AboutVjti from "./components/AppHome/AboutVjti";
import RecruitersPage from "./components/AppHome/OurRecruiters";
import ResponsiveDrawer from "./components/AppHome/Layout/Sidebar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/AdminPannel/AdminDashboard";
import StudentDashboard from "./components/StudentPannel/StudentDashboard";
import EditProfile from "./components/StudentPannel/EditProfile";
import JobProfiles from "./components/StudentPannel/JobProfiles";
import AlumniConnectPage from "./components/AlumniSection/AlumniConnectPage";
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
          <Route path="/admin-list" element={<AdminList />}></Route>
          <Route path="/candidate" element={<StudentInfo />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/placement" element={<PlacementStat />}></Route>
          <Route path="/recruitment" element={<Recruitment />}></Route>
          <Route path="/about" element={<AboutVjti />}></Route>
          <Route path="/recruiters" element={<RecruitersPage />}></Route>
          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          ></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin-events" element={<AdminEvents />}></Route>
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          <Route path="/job-profiles" element={<JobProfiles />}></Route>
          <Route path="/alumni-connect" element={<AlumniConnectPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
