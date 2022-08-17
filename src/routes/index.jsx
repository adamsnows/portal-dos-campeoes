import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PortalPage from "../pages/Portal";
import WayPage from "../pages/Way";
import { useEffect } from "react";
import Homepage from "../pages/Home";

function App() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  
  useEffect(() => {
    token ? 
    navigate('/choose-your-destiny')
    :
    navigate('/')
  }, [])
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/choose-your-destiny" element={<WayPage />} />
        <Route path="/portal" element={<PortalPage />} />
      </Routes>
    </>
  );
}

export default App;
