import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PortalPage from "../pages/Portal";



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/portal" element={<PortalPage />} />
      </Routes>
    </>
  );
}

export default App;
