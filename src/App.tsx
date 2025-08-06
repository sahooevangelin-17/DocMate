import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DoctorRegister from "./pages/Auth/DoctorRegister";
import PatientRegister from "./pages/Auth/PatientRegister";
import HomePage from "./pages/Homepage";
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import DoctorDashboard from './pages/Auth/Doc/DoctorDashboard';
import PatientDashboard from './pages/Auth/Patient/PatientDashboard';
import AppointmentBooking from'./pages/Appointment/AppointmentBooking';
import FindDoctor from "./pages/Auth/Patient/FindDoctor";
import VideoConsultation from './pages/Auth/Patient/VideoConsultation';
import Articles from "./pages/article/Articles";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />
        <Route path="/register/patient" element={<PatientRegister />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} /> 
        <Route path="/patient-dashboard/book-appointment" element={<AppointmentBooking />} />
        <Route path="/patient-dashboard/find-doctor" element={<FindDoctor />} />
        <Route path="/patient-dashboard/video-consultation" element={<VideoConsultation />} />
        <Route path="/patient-dashboard/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
