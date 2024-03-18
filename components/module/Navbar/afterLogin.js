"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
// import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

const AfterLogin = () => {
  const router = useRouter();

  const getRole = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    return decoded.role;
  };
  const submitLogout = async () => {
    try {
      await axios.get("/v1/auth/logout");
      Swal.fire({
        icon: "success",
        title: "Logout Success",
      });
      localStorage.clear();
      router.push("/auth/login");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
      });
    }
  };
  return (
    <nav className="flex justify-between  z-10 py-5 px-6 sm:px-20 w-screen shadow-lg sticky top-0 bg-white">
      <Link href="/">
        <Image
          src="/assets/icons/logo-indigo.svg"
          alt=""
          width={127}
          height={35}
        />
      </Link>

      <div className="gap-2 md:gap-9 flex text-gray-400">
        <button className="hover:bg-gray-50 px-1 rounded hidden sm:block">
          <FaBell className="w-[4vw] h-[4vw] md:w-[2.5vw] md:h-[2.5vw] xl:w-[1.8vw] xl:h-[1.8vw]" />
        </button>
        <button className="hover:bg-gray-50 px-1 rounded hidden sm:block">
          <FaEnvelope className="w-[4vw] h-[4vw] md:w-[2.5vw] md:h-[2.5vw] xl:w-[1.8vw] xl:h-[1.8vw]" />
        </button>
      </div>

      <div className="relative">
        <div className="gap-1 sm:gap-5 flex">
          <button
            onClick={() =>
              router.push(
                `/${
                  getRole() === "worker" ? "profile/worker" : "profile/company"
                }`
              )
            }
            className="pt-1 pb-1 px-5 bg-gray-400 hover:bg-gray-400  text-black"
          >
            Profile
          </button>
          <button
            onClick={submitLogout}
            // onClick={() => {
            //   router.push("/auth/login");
            //   // setTimeout(() => {
            //   //   location.reload();
            //   // }, 400);
            // }}
            className="bg-red-500 hover:bg-red-600 text-white pt-1 pb-2 px-5 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AfterLogin;
