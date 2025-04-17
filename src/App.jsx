import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
// import i18n from "./Components/i18n";
function App() {
  return (
    <>
      <Navbar />
      {/* Outlet will render the component corresponding to the current route */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
