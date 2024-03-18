import Image from "next/image";
import React from "react";
import { FaMapPin } from "react-icons/fa";

const SideHire = () => {
  return (
    <section className=" md:w-[40%] lg:w-[30%] sm:h-[41rem] bg-white rounded-sm">
      <div className="p-10">
        <div className="relative w-[10vw] h-[10vw] mx-auto">
          <Image
            src="/assets/images/crop.jpg"
            alt="avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-sm">
          <h4 className="text-2xl font-semibold mt-5">Fajar Adi Prasetio</h4>

          <p className="mt-2">Software Engineer</p>

          {/* {user?.region && ( */}
          <h6 className="flex  items-center gap-2 my-5 text-gray-400">
            <FaMapPin className="w-[1.5vw] h-[1.5vw]" /> Jakarta
          </h6>
          {/* )} */}

          <p className="text-gray-400"></p>
        </div>

        <div className="mt-8">
          {/* {skills?.length > 0 ? (
            <>
              <h5 className="text-2xl font-semibold">Skill</h5>

              <div className="text-white flex flex-wrap gap-x-3 gap-y-4 pr-4 text-sm mt-5">
                {skills?.map((item, index) => (
                  <span
                    key={index}
                    className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded"
                  >
                    {item?.name}
                  </span>
                ))}
              </div>
            </>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </section>
  );
};

export default SideHire;
