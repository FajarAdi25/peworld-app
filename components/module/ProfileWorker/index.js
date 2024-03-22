"use client";
import { getSkills } from "@/services/skill";
import { getProfile } from "@/services/worker";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaMapPin, FaPhone } from "react-icons/fa";

const ProfileWorker = () => {
  const [user, setUser] = useState({});
  const [skill, setSkill] = useState([]);

  const getUser = async () => {
    try {
      const response = await getProfile();
      setUser(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getSkill = async () => {
    try {
      const response = await getSkills();
      setSkill(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(skillData);

  useEffect(() => {
    getUser();
    getSkill();
  }, []);
  return (
    <section className="w-[80vw] lg:w-[50vw] mx-auto justify-center text-center grid  text-gray-400 -mt-[5vw] pb-14 sm:pb-20">
      <div className="relative w-[20vw] h-[20vw] sm:w-[10vw] sm:h-[10vw] mx-auto">
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

      <div>
        <h5 className="text-black font-semibold text-2xl mt-5">{user.name}</h5>

        <h6 className="text-black mt-2">{user.job_desk}</h6>
        <h6 className="flex justify-center items-center gap-2 mt-2">
          <FaMapPin className="w-3 h-3" />
          {user.domicile}
        </h6>

        <h6 className="gap-2 mt-2">{user.workplace}</h6>

        <p className="mt-5">{user.description}</p>

        <Link
          href={`/profile/worker/edit/`}
          className="mt-8 block mx-auto rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
        >
          Edit profile
        </Link>
      </div>

      <div className="mt-10">
        <h3 className="text-black font-semibold text-2xl">Skill</h3>

        <div className="text-black sm:w-5/12 mx-auto justify-center flex flex-wrap gap-x-3 gap-y-4 text-sm mt-5">
          {skill.map((item, index) => (
            <span
              key={index}
              className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded"
            >
              {item.skill_name}
            </span>
          ))}
        </div>
      </div>

      {/* <ul className="grid justify-center items-center mt-9 gap-4 text-sm">
        <li className="flex gap-3 items-center">
          <FaEnvelope className="w-5 h-5" /> email
        </li>

        <li className="flex gap-3 items-center">
          <FaPhone className="w-5 h-5" /> telp
        </li>
        <li className="flex gap-3 items-center">
          <FaGithub className="w-5 h-5" />
        </li>
      </ul> */}
    </section>
  );
};

export default ProfileWorker;
