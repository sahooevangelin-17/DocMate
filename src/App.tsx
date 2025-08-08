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
import AdminRegister from './pages/Auth/AdminRegister';
import DoctorAppointments from './pages/Auth/Doc/DoctorAppointments';
import DoctorVideoConsultation from './pages/Auth/Doc/DoctorVideoConsultation';
import DoctorSettings from './pages/Auth/Doc/DoctorSettings';
import AdminDashboard from './pages/Auth/Admin/AdminDashboard';
import DigitalPrescription from './pages/Auth/Doc/DigitalPrescription';
import AdminPatient from "./pages/Auth/Admin/AdminPatient";
import AdminDoctor from "./pages/Auth/Admin/AdminDoctor";
import AdminAppointment from './pages/Auth/Admin/AdminAppointment';
import AdminReport from'./pages/Auth/Admin/AdminReport';
import AdminSettings from'./pages/Auth/Admin/AdminSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />
        <Route path="/register/patient" element={<PatientRegister />} />
        <Route path="/register/admin" element={<AdminRegister />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} /> 
        <Route path="/patient-dashboard/book-appointment" element={<AppointmentBooking />} />
        <Route path="/patient-dashboard/find-doctor" element={<FindDoctor />} />
        <Route path="/patient-dashboard/video-consultation" element={<VideoConsultation />} />
        <Route path="/patient-dashboard/articles" element={<Articles />} />
        <Route path="/doctor-dashboard/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor-dashboard/video-consultation" element={<DoctorVideoConsultation />} />
        <Route path="/doctor-dashboard/settings" element={<DoctorSettings />} />
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/doctor-dashboard/prescription" element={<DigitalPrescription />} />
        <Route path="/admin-dashboard/patients" element={<AdminPatient />} />
        <Route path="/admin-dashboard/doctors" element={<AdminDoctor />} />
        <Route path="/admin-dashboard/appointments" element={<AdminAppointment />} />
        <Route path="/admin-dashboard/reports" element={<AdminReport />} />
        <Route path="/admin-dashboard/settings" element={<AdminSettings />} />

      </Routes>
    </Router>
  );
}

export default App;
