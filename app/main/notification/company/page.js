"use client";
import { getHireCompany } from "@/services/notification";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaMapPin,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const NotificationCompany = () => {
  const [hire, setHire] = useState([]);
  const getUserHire = async () => {
    try {
      const response = await getHireCompany();
      setHire(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserHire();
  }, []);
  return (
    <main>
      <div className="bg-[#5E50A1] text-white  py-3">
        <h1 className="w-11/12 mx-auto px-6 text-2xl font-semibold">
          Hiring Candidates
        </h1>
      </div>
      <section className="pt-12 bg-[#F6F7F8] min-h-screen">
        <div className="w-[87vw] px-10 rounded-sm justify-center  mx-auto grid h-13 py-1 items-center">
          <div className="divide-y mt-12 divide-gray-300 w-[70rem] mx-auto rounded-md overflow-hidden min-h-[85vh]">
            {hire.map((item, index) => (
              <article
                className="flex justify-between bg-white px-6 py-9 items-center"
                key={index}
              >
                <div className="flex items-center justify-center gap-7">
                  <div className="w-[8vw] h-[8vw] relative mx-auto rounded-full ">
                    {item.worker_photo ? (
                      <Image
                        src={item?.worker_photo}
                        fill
                        alt=""
                        className="object-cover rounded-full absolute"
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
                    <h3 className="text-xl font-semibold capitalize">
                      {item?.worker_name}
                    </h3>

                    <p className="text-gray-400 mt-1">
                      {item?.email_request_hire}
                    </p>
                    <p className="text-gray-400 mt-1">{item?.worker_phone}</p>
                    <p className="text-gray-400 mt-1">
                      {item?.desciption_request_hire}
                    </p>
                    <h6 className="flex items-center gap-1 text-gray-400 mt-1.5">
                      <FaMapPin className="w-[1.5vw] h-[1.5vw]" />{" "}
                      {item?.worker_domicile}
                    </h6>

                    <div className="text-white flex flex-wrap gap-x-3 gap-y-4 pr-4 text-sm mt-5"></div>
                  </div>
                </div>
                <Link
                  href={`/profile/worker/${item.id}`}
                  className="rounded-sm text-[0.6rem] sm:text-xs lg:text-base sm:mr-10 flex justify-center items-center h-9 px-2 sm:px-0 sm:w-[10vw] sm:ml-2 text-white bg-[#5E50A1] hover:bg-[#5E50A1]/90 "
                >
                  Lihat Profile
                </Link>
              </article>
            ))}
          </div>
        </div>
        {/* <div className="w-full py-12 ">
        <div className="flex justify-center items-center gap-2">
          <button
            className="text-sm h-9 w-9 items-center flex justify-center hover:bg-indigo-50 bg-white border border-gray-200 rounded-sm text-gray-400"
            onClick={handlePrevPage}
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            className="text-sm h-9 w-9 items-center flex justify-center hover:bg-indigo-50 bg-white border border-gray-200 rounded-sm text-gray-400"
            onClick={handleNextPage}
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div> */}
      </section>
    </main>
  );
};

export default NotificationCompany;
