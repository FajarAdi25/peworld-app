import React from "react";

const EditCompanySection = () => {
  return (
    <section className="w-full sm:w-[55%] xl:w-[80%] ">
      <form>
        <article className="bg-white rounded-lg pb-12">
          <h1 className="pt-5 px-7 text-xl font-semibold ">Data diri</h1>
          <div className="w-full bg-gray-300 h-[1px] mt-3"></div>

          <div className="px-7 mt-5">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Nama
              </label>

              <input
                name="name"
                type="text"
                onChange=""
                value=""
                required
                placeholder="Masukan nama"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Nama Perusahaan
              </label>

              <input
                name="company"
                type="text"
                onChange=""
                value=""
                required
                placeholder="Masukan nama perusahan"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Bidang
              </label>

              <input
                name="company_field"
                type="text"
                onChange=""
                value=""
                placeholder="Masukan bidang perusahaan ex : Financial"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Kota
              </label>

              <input
                name="region"
                type="text"
                onChange=""
                value=""
                placeholder="Masukan kota"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Deskripsi singkat
              </label>

              <textarea
                name="description"
                onChange=""
                value=""
                placeholder="Tuliskan deskripsi singkat"
                className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Email
              </label>

              <input
                name="email"
                type="text"
                onChange=""
                value=""
                placeholder="Masukan email"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Instagram
              </label>

              <input
                name="instagram"
                type="text"
                onChange=""
                value=""
                placeholder="Masukan nama Instagram"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Nomor Telepon
              </label>

              <input
                name="phone"
                type="text"
                onChange=""
                value=""
                placeholder="Masukan nomor telepon"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium leading-6 text-gray-400">
                Linkedin
              </label>

              <input
                name="linkedin"
                type="text"
                onChange=""
                value=""
                placeholder="Masukan nama Linkedin"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </article>
      </form>
    </section>
  );
};

export default EditCompanySection;
