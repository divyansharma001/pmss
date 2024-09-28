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
import StudentForm from "./Pages/FormSubmission/FormSubmission.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="apply" element={<StudentForm/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
