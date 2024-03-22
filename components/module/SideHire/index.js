"use client";
import { url } from "@/helpers/url";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa";

const SideHire = ({ user, skills }) => {
  return (
    <section className=" md:w-[40%] lg:w-[30%] sm:h-[41rem] bg-white rounded-sm">
      <div className="p-10">
        <div className="relative w-[10vw] h-[10vw] mx-auto">
          {user.photo ? (
            <Image
              src={user.photo}
              // src="/assets/images/avatar1.png"
              alt="avatar"
              fill
              className="object-cover rounded-full "
              style={{ objectPosition: "top" }}
            />
          ) : (
            <Image
              src="/assets/images/potoprofil.png"
              alt="avatar"
              fill
              className="object-cover rounded-full "
              style={{ objectPosition: "top" }}
            />
          )}
        </div>

        <div className="text-sm">
          <h4 className="text-2xl font-semibold mt-5">{user.name}</h4>

          <p className="mt-2">{user.job_desk}</p>

          <h6 className="flex  items-center gap-2 my-5 text-gray-400">
            <FaMapPin className="w-[1.5vw] h-[1.5vw]" />{" "}
            {user.domicile ? user.domicile : ""}
          </h6>

          <p className="text-gray-400">{user.workplace}</p>
        </div>

        <div className="mt-8">
          <h5 className="text-2xl font-semibold">Skill</h5>

          <div className="text-white flex flex-wrap gap-x-3 gap-y-4 pr-4 text-sm mt-5">
            {skills?.map((item, index) => (
              <span
                key={index}
                className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded"
              >
                {item?.skill_name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideHire;
