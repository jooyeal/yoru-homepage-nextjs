import React from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  text: string;
}

function TextAnimation({ text }: Props) {
  const animation = useSpring({
    loop: false,
    to: async (next, cancel) => {
      await next({ opacity: 1 });
    },
    from: { opacity: 0 },
    config: {
      duration: 3000,
    },
  });
  return <animated.div style={animation}>{text}</animated.div>;
}

export default TextAnimation;
