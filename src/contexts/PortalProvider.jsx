import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from '../services/Api.js'
import { toast } from 'react-toastify'

export const PortalContext = createContext({});

const PortalProvider = ({ children }) => {
  const navigate = useNavigate();
  const onSubmitLogin = (account) => {
    api
      .post("/login", account)
      .then((res) =>  {
       localStorage.setItem('token', res.data.accessToken)
       localStorage.setItem('name', res.data.user.name)
       localStorage.setItem('badges', res.data.user.achievement)
       localStorage.setItem('img', res.data.user.imgProfile)
       localStorage.setItem('discord', res.data.user.discordUser)
       toast.success("Bem vindo, campeão(ã)!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
      });
      })
      .catch((err) => console.log(err));
  };
  const onSubmitRegister = () => {

  }
  return <PortalContext.Provider value={{onSubmitLogin, onSubmitRegister}}>{children}</PortalContext.Provider>;
};

export default PortalProvider