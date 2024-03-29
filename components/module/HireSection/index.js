"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { hireWorker } from "@/services/hire";
import { useRouter } from "next/navigation";

const HireSection = ({ user }) => {
  const router = useRouter();

  const [hire, setHire] = useState({
    message_purpose: "",
    worker_id: user.id,
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setHire((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHire = async (e) => {
    e.preventDefault();
    try {
      await hireWorker(hire);
      Swal.fire({
        icon: "success",
        text: "Add Form Successful",
      });
      // setHire("");
      router.push(`/profile/worker/${user.id}`);
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err,
      });
    }
  };
  return (
    <section className="sm:w-7/12 mt-20 sm:mt-0">
      <div className="sm:w-9/12 mx-auto">
        <h2 className="font-semibold text-4xl">Hubungi {user.name}</h2>

        <p className="text-lg text-gray-500 mt-3">
          Temukan pekerja berbakat dengan berbagai keterampilan dan pengalaman
          yang siap untuk bergabung dengan tim Anda.
        </p>

        <form onSubmit={submitHire} className="mt-10">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-400">
              Tujuan tentang pesan ini
            </label>

            <input
              name="message_purpose"
              type="text"
              onChange={handleChange}
              value={hire.message_purpose}
              required
              placeholder="Projek"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-400">
              Nama lengkap
            </label>

            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={hire.name}
              required
              placeholder="Masukan nama lengkap"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-400">
              Email
            </label>

            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={hire.email}
              required
              placeholder="Masukan email"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-400">
              No handphone
            </label>

            <input
              name="phone"
              type="text"
              onChange={handleChange}
              value={hire.phone}
              required
              placeholder="Masukan no handphone"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-400">
              Deskripsi
            </label>

            <textarea
              name="description"
              onChange={handleChange}
              value={hire.description}
              placeholder="Deskripsikan/jelaskan lebih detail "
              className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>

          <button
            type="submit"
            // disabled={
            //   data.objective === "" ||
            //   data.name === "" ||
            //   data.email === "" ||
            //   data.phone === "" ||
            //   data.description === ""
            // }
            className="flex w-full mt-10 justify-center disabled:bg-[#FBB017]/70 rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Hire
          </button>
        </form>
      </div>
    </section>
  );
};

export default HireSection;
