"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Experienceform = () => {
  const router = useRouter();

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    description: "",
  });

  const handleChange = (e) => {
    setExperience((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const submitExperience = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/v1/experience", experience);
      Swal.fire({
        icon: "success",
        text: "Add Experience Successful",
      });
      setExperience("");
      router.push("/profile/worker");
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Add Experience Failed",
      });
    }
  };

  // console.log(experience);
  return (
    <article className="bg-white rounded-lg pb-10 mt-8">
      <h1 className="pt-5 px-7 text-xl font-semibold ">Pengalaman kerja</h1>
      <div className="w-full bg-gray-300 h-[1px] mt-3"></div>

      <div className="px-7 mt-5 ">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Posisi
          </label>

          <input
            name="position"
            onChange={handleChange}
            value={experience.position}
            type="text"
            required
            placeholder="web developer"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex gap-4">
          <div className="mt-5 w-6/12">
            <label className="block text-sm font-medium leading-6 text-gray-400">
              Nama perusahaan
            </label>

            <input
              name="company"
              onChange={handleChange}
              value={experience.company}
              type="text"
              required
              placeholder="PT Harus bisa"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-5 w-3/12">
            <label className="block text-sm font-medium leading-6 text-gray-400">
              Bulan
            </label>

            <input
              name="work_month"
              onChange={handleChange}
              value={experience.work_month}
              type="text"
              required
              placeholder="Januari"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-5 w-3/12">
            <label className="block text-sm font-medium leading-6 text-gray-400">
              Tahun
            </label>

            <input
              name="work_year"
              onChange={handleChange}
              value={experience.work_year}
              type="text"
              required
              placeholder="2xxx"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Deskripsi singkat
          </label>

          <textarea
            name="description"
            value={experience.description}
            onChange={handleChange}
            placeholder="Deskripsikan pekerjaan anda"
            className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>

        <div className="my-8 h-[1px] w-full bg-slate-200"></div>

        <button
          onClick={submitExperience}
          type="submit"
          className="rounded border-[#FBB017] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#FBB017] shadow-sm hover:bg-[#FBB017] hover:text-white"
        >
          Tambah pengalaman kerja
        </button>
      </div>
    </article>
  );
};

export default Experienceform;
