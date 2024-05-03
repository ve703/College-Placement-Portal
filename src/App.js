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
import StudentExperiance from "./components/StudentPannel/StudentExperience";
import AlumniConnectPage from "./components/AlumniSection/AlumniConnectPage";
import AdminList2 from "./components/AdminPannel/AdminList2";
import AdminCompanies from "./components/AdminPannel/AdminCompanies";
import { useNavigate, Navigate } from "react-router-dom";
import UploadPhoto from "./components/StudentPannel/UploadPhoto";
import Photo from "./components/StudentPannel/Profile";
import Base64UploadImage from "./components/AdminPannel/Base64UploadImage";
import PageNotFound from "./components/AppHome/PageNotFound";
import DisplayInfo from "./components/StudentPannel/DisplayInfo";

function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("AuthToken")) {
  //     if (localStorage.getItem("userType") == 1) {
  //       navigate("/admin-dashboard");
  //     } else {
  //       navigate("/candidate");
  //     }
  //   }
  // }, []);
  return (
    <div className="App">
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
        <Route path="/recruiters" element={<RecruitersPage />}></Route>
        <Route path="/student-experience" element={<DisplayInfo />}></Route>
        {/* <Route path="/upload-photo" element={<UploadPhoto />}></Route> */}
        {/* <Route path="/photo" element={<Photo />}></Route> */}
        {/* <Route path="/up" element={<Base64UploadImage />}></Route> */}
        <Route path="*" element={<PageNotFound />}></Route>
        <Route
          path="/interview-exp"
          element={
            <ProtectedRouteStudent>
              <StudentExperiance />
            </ProtectedRouteStudent>
          }
        ></Route>
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRouteStudent>
              <StudentDashboard />
            </ProtectedRouteStudent>
          }
        ></Route>
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRouteAdmin>
              <AdminDashboard />
            </ProtectedRouteAdmin>
          }
        ></Route>
        <Route path="/admin-events" element={<AdminEvents />}></Route>
        <Route
          path="/edit-profile"
          element={
            <ProtectedRouteStudent>
              <EditProfile />
            </ProtectedRouteStudent>
          }
        ></Route>
        <Route
          path="/job-profiles"
          element={
            <ProtectedRouteStudent>
              <JobProfiles />
            </ProtectedRouteStudent>
          }
        ></Route>
        <Route
          path="/alumni-connect"
          element={
            <ProtectedRouteStudent>
              <AlumniConnectPage />
            </ProtectedRouteStudent>
          }
        ></Route>
        <Route
          path="/admin-list2"
          element={
            <ProtectedRouteAdmin>
              <AdminList2 />
            </ProtectedRouteAdmin>
          }
        ></Route>
        <Route
          path="/admin-company"
          element={
            <ProtectedRouteAdmin>
              <AdminCompanies />
            </ProtectedRouteAdmin>
          }
        ></Route>
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;

export function ProtectedRouteStudent(props) {
  if (
    localStorage.getItem("AuthToken") &&
    localStorage.getItem("userType") == 0
  ) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
export function ProtectedRouteAdmin(props) {
  if (
    localStorage.getItem("AuthToken") &&
    localStorage.getItem("userType") == 1
  ) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
