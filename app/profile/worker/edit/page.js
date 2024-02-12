import EditWorkerSection from "@/components/module/EditWorkerSection";
import SideEditWorker from "@/components/module/SideEditWorker";
import React from "react";

const EditWorker = () => {
  return (
    <main className="w-screen ">
      <div className="bg-[#5E50A1] w-full h-[24vw]"></div>
      <div className="bg-[#F6F7F8] px-6 sm:px-20 lg:px-32  relative h-[474dvh] sm:h-[374dvh] lg:h-[354dvh]">
        <div className="w-[87vw] h-full absolute -mt-[10vw] sm:-mt-[19vw] flex flex-wrap sm:flex-nowrap gap-12">
          <SideEditWorker />

          <EditWorkerSection />
        </div>
      </div>
    </main>
  );
};

export default EditWorker;
