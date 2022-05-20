import React, { ReactNode, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

interface Props {
  children: ReactNode;
}

function ScrollContainer({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,
      });
    }
  }, [sectionRef]);
  return <section ref={sectionRef}>{children}</section>;
}

export default ScrollContainer;
