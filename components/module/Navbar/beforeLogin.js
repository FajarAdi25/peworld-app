import Image from "next/image";
import Link from "next/link";
import React from "react";

const BeforeLogin = () => {
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
      <div className="relative">
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
      </div>
    </nav>
  );
};

export default BeforeLogin;
