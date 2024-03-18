"use client";
import { useEffect, useState } from "react";
import AfterLogin from "./afterLogin";
import BeforeLogin from "./beforeLogin";

const Navbar = () => {
  const [nav, setNav] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setNav(localStorage.getItem("token") ? <AfterLogin /> : <BeforeLogin />);
    }
  }, []);
  return <>{nav}</>;
};

export default Navbar;
