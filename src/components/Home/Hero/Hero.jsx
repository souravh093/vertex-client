import Container from "@/components/Other/Container/Container";
import React from "react";
import heroImage from "../../../../public/hero.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <div
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
            hello
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default Hero;
