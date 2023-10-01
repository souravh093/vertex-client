import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";

const Logo = () => {
  return <Image src={logo} width={100} height={20} placeholder="blur" alt="" />;
};

export default Logo;
