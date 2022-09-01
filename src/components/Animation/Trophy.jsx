import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

export const Trophy = () => {
    const containerDivRef = useRef(null);

    useEffect(() => {
      Lottie.loadAnimation({
        container: containerDivRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../images/trophy.json"),
      });

      return () => {
        Lottie.destroy();
      };
    }, []);
    
    return <div className="animation-trophy" ref={containerDivRef}/>;
  };