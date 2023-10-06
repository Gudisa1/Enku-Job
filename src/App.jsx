import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import JobsDetail from "./pages/JobsDetail";
import Linkedin from "./pages/Linkedin";
import LinkedinJobDetail from "./pages/LinkedinJobDetail";
import LinkedinNavBar from "./components/LinkedinNavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <LinkedinNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linkedinjobs" element={<Linkedin />} />
        <Route path="/jobs/:Jobid" element={<JobsDetail />} />
        <Route path="/linkedinjobdetail" element={<LinkedinJobDetail />} />
      </Routes>
    </>
  );
}

export default App;
