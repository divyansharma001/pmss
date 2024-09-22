import { Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className='w-full overflow-hidden"'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
