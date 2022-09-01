import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/Api.js";
import { toast } from "react-toastify";

import { showToast } from "../hooks/useToast.js";

export const PortalContext = createContext({});

const PortalProvider = ({ children }) => {
  const navigate = useNavigate();

  const onSubmitLogin = async (account) => {
    try {
      const response = await api.post("/login", account);

      const { accessToken, user } = response.data;

      localStorage.setItem("user", JSON.stringify({ accessToken, user }));

      showToast("success", "Bem vindo, campeão(ã)!", { autoClose: 1000});

      const element = document.querySelector(".login-register-box");
      element.classList.add(
        "animate__animated",
        "animate__fadeOutRight",
        "animate__fast"
      );
      setTimeout(() => {
        navigate("/choose-your-destiny");
      }, "800");

    } catch (error) {
      showToast("error", "Login ou senha incorreto.");
    }
  };

  const onSubmitRegister = (account) => {
    account = {
      password: account.password,
      created: new Date(),
      isAdmin: false,
      name: account.name,
      email: account.email,
      discordUser: account.discordUser,
      achievement: [],
      imgProfile: account.imgProfile,
    };
    console.log(account);
  };

  return (
    <PortalContext.Provider value={{ onSubmitLogin, onSubmitRegister }}>
      {children}
    </PortalContext.Provider>
  );
};

export default PortalProvider;
