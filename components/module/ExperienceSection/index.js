"use client";
import Image from "next/image";
import React from "react";

const ExperienceSection = () => {
  return (
    <div className=" mt-10 gap-5 flex flex-wrap">
      <article className="flex gap-6 sm:w-[48%]">
        <div className="relative w-[24vw] h-[6vw] sm:w-[24vw] sm:h-[6vw] mx-auto">
          <Image src="/assets/images/tokped.png" alt="work experience" fill />
        </div>

        <div>
          <h5 className="font-semibold text-xl">Sofware Engineer</h5>
          <p className="text-lg">Tokopedia</p>
          <p className="text-gray-400 gap-3 flex">
            <span>6 months</span>
          </p>
          <p className="text-sm">Mengerjakan pembuatan aplikasi</p>
        </div>
      </article>
    </div>
  );
};

export default ExperienceSection;
