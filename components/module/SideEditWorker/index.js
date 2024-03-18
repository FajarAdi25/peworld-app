import Image from "next/image";
import React from "react";
import { FaMapPin, FaPen } from "react-icons/fa";

const SideEditWorker = () => {
  return (
    <section className="w-[100%] sm:w-[30%]">
      <article className="bg-white rounded-md">
        <div className="px-3 lg:px-10 py-8">
          <div className="grid justify-center gap-4">
            <div className="relative w-[10vw] h-[10vw] mx-auto">
              <Image
                src="/assets/images/crop.jpg"
                alt="avatar"
                fill
                className="object-cover rounded-full "
                style={{ objectPosition: "top" }}
              />
            </div>

            <div className="relative flex w-[10vw] justify-center group">
              <button className="text-gray-400 flex items-center py-1 px-8 justify-center gap-1 font-semibold text-lg group-hover:bg-gray-50">
                <FaPen className="w-[1vw] h-[1vw]" /> Edit
              </button>
              <input
                type="file"
                onChange=""
                className="absolute opacity-0 w-[10vw] "
              />
            </div>
          </div>

          <div className="text-sm">
            <h4 className="text-2xl font-semibold mt-10">Fajar Adi Prasetio</h4>
            <p className="mt-2">Sofware Engineer</p>
            <h6 className="flex  items-center gap-2 mt-5 text-gray-400">
              Freelance
            </h6>
            <h6 className="flex  items-center gap-2 my-5 text-gray-400">
              <FaMapPin className="w-[1vw] h-[1vw]" />
              Jakarta
            </h6>
          </div>
        </div>
      </article>

      <div>
        <button
          onClick=""
          className="mt-7 rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
        >
          Simpan
        </button>

        <button
          onClick=""
          type="button"
          className="mt-4 rounded border-[#5E50A1] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#5E50A1] shadow-sm hover:bg-gray-200"
        >
          Batal
        </button>
      </div>
    </section>
  );
};

export default SideEditWorker;
