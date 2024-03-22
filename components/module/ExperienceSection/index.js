"use client";
import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";

const ExperienceSection = () => {
  const [experience, setExperience] = useState([]);

  const getExperience = async () => {
    const result = await axios.get("/v1/experience");
    setExperience(result.data.data);
  };

  useEffect(() => {
    getExperience();
  }, []);

  const deleteExperience = async (id) => {
    try {
      await axios.delete(`/v1/experience/${id}`);
      Swal.fire({
        icon: "success",
        title: "Experience has been deleted",
      });
      getExperience();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Delete failed",
      });
    }
  };

  return (
    <div className=" mt-10 gap-5 flex flex-wrap">
      {experience?.map((item) => (
        <article className="flex gap-6 sm:w-[48%]" key={item.id}>
          <button
            className="absolute z-[1] bg-red-600 hover:bg-red-600/80 text-gray-200 px-[0.7vw] h-[2vw] pb-1 flex justify-center items-center rounded-full"
            onClick={() => deleteExperience(item?.id)}
          >
            x
          </button>
          <div className="relative w-[24vw] h-[6vw] sm:w-[24vw] sm:h-[6vw] mx-auto">
            <Image src="/assets/images/tokped.png" alt="work experience" fill />
          </div>

          <div>
            <h5 className="font-semibold text-xl">{item.position}</h5>
            <p className="text-lg">{item.company}</p>
            <p className="text-gray-400 gap-3 flex">
              <span>{item.work_year}</span>
            </p>
            <p className="text-sm">{item.created_at}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ExperienceSection;
