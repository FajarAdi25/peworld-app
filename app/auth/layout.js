import SideAuth from "@/components/module/SideAuth";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="px-5 sm:px-20 pt-7 pb-10 flex w-screen bg-[#F6F7F8] min-h-screen relative">
      <SideAuth />
      {children}
    </div>
  );
};

export default AuthLayout;
