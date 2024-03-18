"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaPhone,
} from "react-icons/fa";

const ProfileCompany = () => {
  return (
    <section className="w-[80vw] lg:w-[50vw] mx-auto justify-center text-center grid  text-gray-400 -mt-[5vw] pb-20 ">
      <div className="relative w-[20vw] h-[20vw] sm:w-[10vw] sm:h-[10vw] mx-auto">
        <Image
          src="/assets/images/profilehr.jpg"
          alt="avatar"
          fill
          className="object-cover rounded-full "
          style={{ objectPosition: "top" }}
        />
      </div>

      <div>
        <h5 className="text-black font-semibold text-2xl mt-5">Budi</h5>

        <h6 className="text-black mt-4">HR Specialist</h6>
        <h6 className="text-black">Pijar Company</h6>
        <h6 className="flex justify-center items-center gap-2 mt-3">
          <FaMapPin className="w-3 h-3" /> Jakarta
        </h6>

        <p className="mt-5">HR pengalaman lebih dari 5 tahun</p>

        <Link
          href={`/profile/company/edit`}
          className="mt-8 block mx-auto rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
        >
          Edit profile
        </Link>
      </div>

      <ul className="grid justify-center items-center mt-6 gap-2">
        <li className="flex gap-3 items-center">
          <FaEnvelope className="w-5 h-5" /> budi@gmail.com
        </li>
        <li className="flex gap-3 items-center">
          <FaInstagram className="w-5 h-5" /> Budi Gunawan
        </li>
        <li className="flex gap-3 items-center">
          <FaPhone className="w-5 h-5" /> 0989271726372
        </li>
        <li className="flex gap-3 items-center">
          <FaLinkedin className="w-5 h-5" /> Budi Gunawan
        </li>
      </ul>
    </section>
  );
};

export default ProfileCompany;
