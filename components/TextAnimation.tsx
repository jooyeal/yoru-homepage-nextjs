import React, { ReactNode } from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  children: ReactNode;
  duration: number;
}

function TextAnimation({ children, duration }: Props) {
  const animation = useSpring({
    loop: false,
    to: async (next, cancel) => {
      await next({ opacity: 1 });
    },
    from: { opacity: 0 },
    config: {
      duration,
    },
  });
  return <animated.div style={animation}>{children}</animated.div>;
}

export default TextAnimation;
