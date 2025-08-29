import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../Components/Global/Navbar/Navbar';
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import Footer from "../Components/Global/Footer/Footer";

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
