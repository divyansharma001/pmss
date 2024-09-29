import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Signin from "./Pages/Signin/Signin.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import StudentDashBoardLayout from "./Components/StudentDashboard/layout.jsx";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard.jsx";
import Faqs from "./Components/Faq/Faq.jsx";
import Contact from "./Components/ContactUs.jsx";
import StudentForm from "./Pages/FormSubmission/FormSubmission.jsx";
import PersonalDetails from "./Pages/StudentDashboard/PersonalInfoStudent.jsx";
import EducationalDetails from "./Pages/StudentDashboard/EducationalDetails.jsx";
import DocumentDetails from "./Pages/StudentDashboard/DocumentDetails.jsx"
import ChoiceFilling from "./Pages/StudentDashboard/ChoiceFilling.jsx";
import CandidatesApplied from "./Pages/Dashboard/CandidatesApplied.jsx"
import DocumentScanningAdmin from "./Pages/Dashboard/DocumentScanning.jsx.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard-applications" element={<CandidatesApplied />} />
      <Route path="dashboard-scanning" element={<DocumentScanningAdmin />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="student" element={<StudentDashBoardLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="personal-details" element={<PersonalDetails />} />
        <Route path="education-details" element={<EducationalDetails />} />
        <Route path="document-details" element={<DocumentDetails />} />
        <Route path="choice-filling" element={<ChoiceFilling />} />
      </Route>
      <Route path="faqs" element={<Faqs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="apply" element={<StudentForm/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
