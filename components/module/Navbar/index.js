"use client";
import Image from "next/image";
import Link from "next/link";
// import { cookies } from "next/headers";
// import { FaBell, FaEnvelope } from "react-icons/fa";
// import { useState } from "react";

const Navbar = () => {
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

      {/* {token ? (
        <div className="gap-2 md:gap-9 flex text-gray-400">
          <button className="hover:bg-gray-50 px-1 rounded hidden sm:block">
            <FaBell className="w-[4vw] h-[4vw] md:w-[2.5vw] md:h-[2.5vw] xl:w-[1.8vw] xl:h-[1.8vw]" />
          </button>
          <button className="hover:bg-gray-50 px-1 rounded hidden sm:block">
            <FaEnvelope className="w-[4vw] h-[4vw] md:w-[2.5vw] md:h-[2.5vw] xl:w-[1.8vw] xl:h-[1.8vw]" />
          </button>

          <div className="relative">
            {isToggleOpen && (
              <div className="grid bg-gray-300 absolute right-0 font-semibold rounded overflow-hidden">
                <Link
                  href={`/profile/${user_id}`}
                  className="pt-1 pb-1 px-5 hover:bg-gray-400  text-black"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    router.push("/auth/login");
                    // setTimeout(() => {
                    //   location.reload();
                    // }, 400);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white pt-1 pb-2 px-5 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : ( */}
      <div className="gap-1 sm:gap-5 flex">
        <Link
          href="/auth/login"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#5E50A1] shadow-sm ring-1 ring-inset ring-[#5E50A1] hover:bg-gray-50"
        >
          Masuk
        </Link>
        <Link
          href="/auth/register"
          className="rounded-md bg-[#5E50A1] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
        >
          Daftar
        </Link>
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
