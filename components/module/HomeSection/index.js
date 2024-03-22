"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaMapPin,
  FaSearch,
} from "react-icons/fa";
import { getWorkers } from "@/services/worker";
import { useRouter } from "next/navigation";

const HomeSection = () => {
  const [workerData, setWorkerData] = useState([]);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("ASC");
  const getUser = async () => {
    try {
      const response = await getWorkers({
        limit: 10,
        page,
        search: searchText,
        sort: "domicile",
        sortBy: sort,
      });
      setWorkerData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [page, searchText, sort]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setPage(1);
  };

  return (
    <section className="pt-12 bg-[#F6F7F8] min-h-screen">
      <div className="w-[87vw] px-10 rounded-sm justify-center  mx-auto grid h-13 py-1 items-center">
        {/* <SearchBar /> */}
        <div className="flex">
          <div className="relative">
            <input
              value={searchText}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search..."
              className="block text-xs  sm:w-[66vw] rounded-md px-4 h-full text-gray-900  placeholder:text-gray-400  focus:outline-none sm:text-sm sm:leading-6"
            />

            <button className="hover:bg-gray-50 absolute right-4 top-2.5">
              <FaSearch className="w-[1.5vw] h-[1.5vw] text-gray-400 " />
            </button>
          </div>

          <div className="flex items-center -pl-4 text-xs sm:text-base">
            <div className="h-11 w-[1px] ml-7 mr-2 bg-gray-300"></div>

            {/* <button className="flex font-semibold justify-center items-center bg-white hover:bg-gray-50  h-6 sm:h-11 w-[12vw] sm:w-[8vw] gap-2 text-gray-500">
              <FaChevronUp className={`w-[1.1vw] h-[1.1vw] mt-1 `} />
              Sort
            </button> */}

            {sort === "ASC" ? (
              <button
                onClick={() => setSort("DESC")}
                className="flex font-semibold justify-center items-center bg-white hover:bg-gray-50  h-6 sm:h-11 w-[12vw] sm:w-[8vw] gap-2 text-gray-500"
              >
                <FaChevronUp className={`w-[1.1vw] h-[1.1vw] mt-1 `} />
                Sort
              </button>
            ) : (
              <button
                onClick={() => setSort("ASC")}
                className="flex font-semibold justify-center items-center bg-white hover:bg-gray-50  h-6 sm:h-11 w-[12vw] sm:w-[8vw] gap-2 text-gray-500"
              >
                <FaChevronDown className={`w-[1.1vw] h-[1.1vw] mt-1 `} />
                Sort
              </button>
            )}

            <button
              onClick={handleSearchSubmit}
              className="rounded font-semibold flex justify-center items-center h-6 sm:h-11 w-[12vw] sm:w-[8vw] ml-2 text-white bg-[#5E50A1] hover:bg-[#5E50A1]/90 "
            >
              Search
            </button>
          </div>
        </div>
        <div className="divide-y mt-12 divide-gray-300 w-[88%] mx-auto rounded-md overflow-hidden min-h-[85vh]">
          {workerData.map((item) => (
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
                    {/* {skillData.data.map((item, index) => (
                      <span
                        key={index}
                        className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded"
                      >
                        {item.skill_name}
                      </span>
                    ))} */}
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
      <div className="w-full py-12 ">
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
      </div>
    </section>
  );
};

export default HomeSection;
