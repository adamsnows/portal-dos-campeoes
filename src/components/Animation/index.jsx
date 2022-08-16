import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

export const AnimationHeader = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../images/animation.json"),
    });
    return () => {
      Lottie.destroy();
    };
  }, []);
  return <div className="animation-header" ref={container}></div>;
};

export const AnimationDiscord = () => {
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("../../images/discord.json"),
        });
        return () => {
          Lottie.destroy();
        };
      }, []);
  return <div className="discord-animation" ref={container}></div>;
};
