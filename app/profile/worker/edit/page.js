"use client";
import Experienceform from "@/components/module/ExperienceForm";
import PortfolioForm from "@/components/module/PortfolioForm";
import SkillForm from "@/components/module/SkillForm";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMapPin, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

const EditWorker = () => {
  const [worker, setWorker] = useState({});
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const response = await axios.get("/v1/workers/profile");
      const result = response.data.data;
      setWorker(result);
      setProfile({
        name: result.name,
        job_desk: result.job_desk,
        domicile: result.domicile,
        workplace: result.workplace,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Failed Get Data",
      });
    }
  };

  const updateProfile = async () => {
    try {
      await axios.put("/v1/workers/profile", worker);
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
      });
      getProfile();
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Failed Update Profile",
      });
    }
  };

  const updateImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);
    try {
      await axios.put("/v1/workers/profile/photo", formData);
      Swal.fire({
        icon: "success",
        text: "Profile Picture Changed",
      });
      getProfile();
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Failed Change Image",
      });
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <main className="w-screen ">
      <div className="bg-[#5E50A1] w-full h-[24vw]"></div>
      <div className="bg-[#F6F7F8] px-6 sm:px-20 lg:px-32  relative h-[474dvh] sm:h-[374dvh] lg:h-[354dvh]">
        <div className="w-[87vw] h-full absolute -mt-[10vw] sm:-mt-[19vw] flex flex-wrap sm:flex-nowrap gap-12">
          <section className="w-[100%] sm:w-[30%]">
            <article className="bg-white rounded-md">
              <div className="px-3 lg:px-10 py-8">
                <div className="grid justify-center gap-4">
                  <div className="relative w-[10vw] h-[10vw] mx-auto">
                    {profile.photo ? (
                      <Image
                        src={profile.photo}
                        alt="avatar"
                        fill
                        className="object-cover rounded-full "
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

                  <div className="relative flex w-[10vw] justify-center group">
                    <button className="text-gray-400 flex items-center py-1 px-8 justify-center gap-1 font-semibold text-lg group-hover:bg-gray-50">
                      <FaPen className="w-[1vw] h-[1vw]" /> Edit
                    </button>
                    <input
                      type="file"
                      onChange={updateImage}
                      className="absolute opacity-0 w-[10vw] "
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <h4 className="text-2xl font-semibold mt-10">
                    {profile.name}
                  </h4>
                  <p className="mt-2">{profile.job_desk}</p>
                  <h6 className="flex  items-center gap-2 mt-5 text-gray-400">
                    {profile.workplace}
                  </h6>
                  <h6 className="flex  items-center gap-2 my-5 text-gray-400">
                    <FaMapPin className="w-[1vw] h-[1vw]" />
                    {profile.domicile}
                  </h6>
                </div>
              </div>
            </article>

            <div>
              <button
                onClick={() => updateProfile()}
                className="mt-7 rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
              >
                Simpan
              </button>

              <button
                onClick={() => router.push("/profile/worker")}
                type="button"
                className="mt-4 rounded border-[#5E50A1] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#5E50A1] shadow-sm hover:bg-gray-200"
              >
                Batal
              </button>
            </div>
          </section>
          {/* <SideEditWorker /> */}

          {/* <EditWorkerSection /> */}
          <section className="w-full sm:w-[55%] xl:w-[80%] ">
            <form>
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
                      onChange={(e) =>
                        setWorker({ ...worker, name: e.target.value })
                      }
                      value={worker.name}
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
                      onChange={(e) =>
                        setWorker({ ...worker, job_desk: e.target.value })
                      }
                      value={worker.job_desk}
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
                      onChange={(e) =>
                        setWorker({ ...worker, domicile: e.target.value })
                      }
                      value={worker.domicile}
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
                      onChange={(e) =>
                        setWorker({ ...worker, workplace: e.target.value })
                      }
                      value={worker.workplace}
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
                      onChange={(e) =>
                        setWorker({ ...worker, description: e.target.value })
                      }
                      value={worker.description}
                      type="text"
                      placeholder="Tuliskan deskripsi singkat"
                      className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </article>
              {/* <BiodataForm /> */}

              <SkillForm />

              <Experienceform />

              <PortfolioForm />
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default EditWorker;
