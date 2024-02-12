import React from "react";

const BiodataForm = () => {
  return (
    <article className="bg-white rounded-lg pb-12">
      <h1 className="pt-5 px-7 text-xl font-semibold ">Data diri</h1>
      <div className="w-full bg-gray-300 h-[1px] mt-3"></div>

      <div className="px-7 mt-5">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Nama lengkap
          </label>

          <input
            name="name"
            onChange=""
            value=""
            type="text"
            required
            placeholder="Masukan nama lengkap"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Job desk
          </label>

          <input
            name="job_title"
            onChange=""
            value=""
            type="text"
            placeholder="Masukan job desk"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Domisili
          </label>

          <input
            name="region"
            onChange=""
            value=""
            type="text"
            placeholder="Masukan domisili"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Tempat kerja
          </label>

          <input
            name="company"
            onChange=""
            value=""
            type="text"
            placeholder="Masukan tempat kerja"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Deskripsi
          </label>

          <textarea
            name="description"
            onChange=""
            value=""
            type="text"
            placeholder="Tuliskan deskripsi singkat"
            className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
    </article>
  );
};

export default BiodataForm;
