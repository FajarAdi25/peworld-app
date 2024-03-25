import ProfileCompany from "@/components/module/ProfileCompany";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const DetailCompany = () => {
  return (
    <main className="bg-[#9EA0A5]/30 w-screen grid justify-center pt-20 pb-40">
      <div className="bg-[#5E50A1] w-[87vw] h-[20vw] grid justify-end items-end rounded-t-lg ">
        {/* <button className="flex text-white items-center my-1 py-2 px-6 gap-2 font-semibold">
          <FaPencilAlt className="w-[1.3vw] h-[1.3vw]" /> Ubah Latar
        </button> */}
      </div>

      <div className="bg-white w-[87vw]">
        <ProfileCompany />
      </div>
    </main>
  );
};

export default DetailCompany;
