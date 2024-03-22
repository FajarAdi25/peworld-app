import { Tab, Tabs } from "@/components/base/TabBar";
import ExperienceSection from "@/components/module/ExperienceSection";
import PortfolioSection from "@/components/module/PortfolioSection";
import ProfileWorker from "@/components/module/ProfileWorker";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const DetailWorker = async () => {
  return (
    <main className="bg-[#9EA0A5]/30 w-screen grid justify-center pt-20 pb-40">
      <div className="bg-[#5E50A1] w-[87vw] h-[20vw] grid justify-end items-end rounded-t-lg ">
        <button className="flex text-white items-center my-1 py-2 px-6 gap-2 font-semibold">
          <FaPencilAlt className="w-[1.3vw] h-[1.3vw]" /> Ubah Latar
        </button>
      </div>

      <div className="bg-white w-[87vw] pb-16 rounded-b-lg">
        <ProfileWorker />
        <Tabs>
          <Tab label="Portfolio">
            <div className="py-4">
              <PortfolioSection />
            </div>
          </Tab>
          <Tab label="Pengalaman Kerja">
            <div className="py-4">
              <ExperienceSection />
            </div>
          </Tab>
        </Tabs>
      </div>
    </main>
  );
};

export default DetailWorker;
