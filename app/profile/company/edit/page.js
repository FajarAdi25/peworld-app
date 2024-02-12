import EditCompanySection from "@/components/module/EditCompanySection";
import SideEditCompany from "@/components/module/SideEditCompany";
import React from "react";

const EditCompany = () => {
  return (
    <main className="w-screen">
      <div className="bg-[#5E50A1] w-full h-[24vw]" />
      <div className="bg-[#F6F7F8] px-6 sm:px-20 lg:px-32  relative h-[250dvh] md:h-[100vw] lg:h-[75vw] ">
        <div className="w-[87vw]  h-full absolute -mt-[10vw] sm:-mt-[19vw] flex flex-wrap sm:flex-nowrap gap-12">
          <SideEditCompany />
          <EditCompanySection />
        </div>
      </div>
    </main>
  );
};

export default EditCompany;
