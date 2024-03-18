// "use client";
import React from "react";
import SearchBar from "../SearchBar";
import Link from "next/link";
import Image from "next/image";
import { FaMapPin } from "react-icons/fa";
// import { getWorkers } from "@/services/worker";
// import { getSkills } from "@/services/skill";

const HomeSection = async ({ dataWorkers, dataSkills }) => {
  // const [skills, setSkills] = useState([]);

  // const workerData = await getWorkers();
  // const skillData = await getSkills();

  const workerData = await dataWorkers;
  const skillData = await dataSkills;
  return (
    <section className="pt-12 bg-[#F6F7F8] min-h-screen">
      <div className="w-[87vw] px-10 rounded-sm justify-center  mx-auto grid h-13 py-1 items-center">
        <SearchBar />

        <div className="divide-y mt-12 divide-gray-300 w-[88%] mx-auto rounded-md overflow-hidden min-h-[85vh]">
          {workerData?.map((item) => (
            <article
              className="flex justify-between bg-white px-6 py-9 items-center"
              key={item.id}
            >
              <div className="flex items-center justify-center gap-7">
                <div className="w-[8vw] h-[8vw] relative mx-auto rounded-full ">
                  {item.photo ? (
                    <Image
                      src={item?.photo}
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
                    {item?.name}
                  </h3>

                  <p className="text-gray-400 mt-1">{item?.job_desk}</p>
                  <h6 className="flex items-center gap-1 text-gray-400 mt-1.5">
                    <FaMapPin className="w-[1.5vw] h-[1.5vw]" />{" "}
                    {item?.domicile}
                  </h6>

                  <div className="text-white flex flex-wrap gap-x-3 gap-y-4 pr-4 text-sm mt-5">
                    {/* <p>bagian skill</p> */}
                    {skillData.map((item, index) => (
                      <span
                        key={index}
                        className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded"
                      >
                        {item.skill_name}
                      </span>
                    ))}
                  </div>
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
    </section>
  );
};

export default HomeSection;
