import HomeSection from "@/components/module/HomeSection";
import React from "react";
// import { getWorkers } from "@/services/worker";
// import { getSkills } from "@/services/skill";
// import { cookies } from "next/headers";

const Home = () => {
  return (
    <main>
      <div className="bg-[#5E50A1] text-white  py-3">
        <h1 className="w-11/12 mx-auto px-6 text-2xl font-semibold">
          Candidates
        </h1>
      </div>
      <HomeSection />
    </main>
  );
};

export default Home;
