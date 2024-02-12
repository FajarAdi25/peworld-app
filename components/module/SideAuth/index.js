import React from "react";
import Image from "next/image";

const SideAuth = () => {
  return (
    <section>
      <div
        className="relative sm:w-3/4 text-white grid justify-center items-center h-screen "
        style={{
          backgroundImage: "url('/assets/images/bg-auth.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="bg-[#5E50A1]/80 absolute w-full h-full" />

        <div className="z-[1]">
          <div className="absolute top-0 flex m-4">
            <Image
              src="/assets/icons/logo-white.png"
              alt=""
              width={96}
              height={24}
            />
          </div>
          <h1 className="text-3xl w-7/12 mx-auto font-semibold hidden sm:block">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SideAuth;
