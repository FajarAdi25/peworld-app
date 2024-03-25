"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap  w-screen mt-20 sm:mt-28 px-20 mb-10">
      <div className="sm:w-7/12 lg:mt-[5vw] order-2 md:order-1 mt-10 sm:mt-0">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold lg:w-7/12 sm:leading-[50px]">
          Talenta Terbaik Negeri untuk Perubahan Revolusi 4.0
        </h3>
        <p className="sm:w-9/12 text-sm sm:text-base mt-3">
          Selamat datang di platform pencarian kerja kami
        </p>
        <Link
          href="/main/home"
          className="mt-10 block w-fit rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
        >
          Mulai Dari Sekarang
        </Link>
      </div>

      <div className="w-6/12 mx-auto sm:mx-0 order-1 md:order-2">
        <div className="w-[33vw] h-[35vw] relative">
          <Image
            src="/assets/images/hero.png"
            fill
            alt=""
            className="rounded object-cover absolute"
          />

          <div
            style={{
              transform: "rotate(-15.787deg)",
            }}
            className="absolute w-full h-full bg-[#E2E5ED] z-[-1]"
          ></div>
        </div>

        <div className="relative w-[15vw] h-[15vw] -mt-[12vw] -ml-[5.5vw]">
          <Image
            src="/assets/icons/group-box.svg"
            fill
            alt=""
            className="absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
