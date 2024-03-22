"use client";
import { getRecruiter } from "@/services/recruiter";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaPhone,
} from "react-icons/fa";

const ProfileCompany = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const response = await getRecruiter();
      setUser(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <section className="w-[80vw] lg:w-[50vw] mx-auto justify-center text-center grid  text-gray-400 -mt-[5vw] pb-20 ">
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

        <h6 className="text-black mt-4">{user.position}</h6>
        <h6 className="text-black">{user.company}</h6>
        <h6 className="flex justify-center items-center gap-2 mt-3">
          <FaMapPin className="w-3 h-3" /> {user.city}
        </h6>

        <p className="mt-5">{user.description}</p>

        <Link
          href={`/profile/company/edit`}
          className="mt-8 block mx-auto rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
        >
          Edit profile
        </Link>
      </div>

      <ul className="grid justify-center items-center mt-6 gap-2">
        <li className="flex gap-3 items-center">
          <FaEnvelope className="w-5 h-5" /> {user.email}
        </li>
        <li className="flex gap-3 items-center">
          <FaInstagram className="w-5 h-5" /> {user.instagram}
        </li>
        <li className="flex gap-3 items-center">
          <FaPhone className="w-5 h-5" /> {user.phone}
        </li>
        <li className="flex gap-3 items-center">
          <FaLinkedin className="w-5 h-5" /> {user.linkedin}
        </li>
      </ul>
    </section>
  );
};

export default ProfileCompany;
