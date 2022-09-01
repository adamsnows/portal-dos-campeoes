import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

export const AnimationDiscord = () => {
  const containerDivRef = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: containerDivRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../images/discord.json"),
    });

    return () => {
      Lottie.destroy();
    };
  }, []);

  return <div className="discord-animation" ref={containerDivRef}/>;
};
