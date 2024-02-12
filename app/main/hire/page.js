import HireSection from "@/components/module/HireSection";
import SideHire from "@/components/module/SideHire";
import React from "react";

const Hire = () => {
  return (
    <main className="w-screen flex flex-wrap sm:flex-nowrap justify-center px-8 pt-12 pb-20 bg-[#F6F7F8]">
      <SideHire />
      <HireSection />
    </main>
  );
};

export default Hire;
