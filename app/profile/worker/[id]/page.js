"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaMapPin, FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import { getDetailWorkers } from "@/services/worker";
import { getSkillsDetailWorker } from "@/services/skill";

const SelectedWorker = ({ params: { id } }) => {
  //   const id = params.id;
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);

  const getWorker = async () => {
    try {
      const response = await getDetailWorkers(id);
      setUser(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getSkills = async () => {
    try {
      const response = await getSkillsDetailWorker(id);
      setSkills(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  //   console.log(skills);
  useEffect(() => {
    getWorker();
    getSkills();
  }, []);
  return (
    <main className="bg-[#9EA0A5]/30 w-screen grid justify-center pt-20 pb-40">
      <div className="bg-[#5E50A1] w-[87vw] h-[20vw] grid justify-end items-end rounded-t-lg ">
        {/* <button className="flex text-white items-center my-1 py-2 px-6 gap-2 font-semibold">
          <FaPencilAlt className="w-[1.3vw] h-[1.3vw]" /> Ubah Latar
        </button> */}
      </div>

      <div className="bg-white w-[87vw] pb-16 rounded-b-lg">
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
            <h5 className="text-black font-semibold text-2xl mt-5">
              {user.name}
            </h5>

            <h6 className="text-black mt-2">{user.job_desk}</h6>
            <h6 className="flex justify-center items-center gap-2 mt-2">
              <FaMapPin className="w-3 h-3" />
              {user.domicile ? user.domicile : ""}
            </h6>

            <h6 className="gap-2 mt-2">{user.workplace}</h6>

            <p className="mt-5">{user.description}</p>

            <Link
              href={`/main/hire/${user.id}`}
              className="mt-8 block mx-auto rounded bg-[#FBB017] px-3.5 pt-2 pb-2.5 w-[22vw] text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#FBB017]/90"
            >
              Hire
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-black font-semibold text-2xl">Skill</h3>

            <div className="text-black sm:w-5/12 mx-auto justify-center flex flex-wrap gap-x-3 gap-y-4 text-sm mt-5">
              {skills.map((item, index) => (
                <span
                  key={index}
                  className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded"
                >
                  {item.skill_name}
                </span>
              ))}
            </div>
          </div>

          <ul className="grid justify-center items-center mt-9 gap-4 text-sm">
            <li className="flex gap-3 items-center">
              <FaEnvelope className="w-5 h-5" /> {user.email}
            </li>

            {/* <li className="flex gap-3 items-center">
          <FaPhone className="w-5 h-5" /> {user.}
        </li> */}
            {/* <li className="flex gap-3 items-center">
          <FaGithub className="w-5 h-5" />
        </li> */}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default SelectedWorker;
