import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="fixed bottom-0 w-full">
      <Marquee
        className="h-16"
        speed={50}
        gradientColor={[255, 255, 255]}
        gradientWidth={0}
      >
        <div className="flex gap-6">
          <div>FRONTEND</div>
          <div>BACKEND</div>
          <div>KOREA</div>
          <div>JAPAN</div>
        </div>
      </Marquee>
    </div>
  );
}

export default Footer;
