"use client";
// import EditCompanySection from "@/components/module/EditCompanySection";
// import SideEditCompany from "@/components/module/SideEditCompany";
import { editRecruiter, getRecruiter } from "@/services/recruiter";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMapPin, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

const EditCompany = () => {
  const [recruiter, setRecruiter] = useState({});
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const result = await getRecruiter();
      setRecruiter(result);
      setProfile({
        // name: result.name,
        company: result.company,
        position: result.position,
        city: result.city,
        description: result.description,
        email: result.email,
        instagram: result.instagram,
        phone: result.phone,
        linkedin: result.linkedin,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Failed Get Data",
      });
    }
  };
  const updateRecruiter = async () => {
    try {
      // await axios.put("/v1/recruiters/profile", recruiter);
      await editRecruiter(recruiter);
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
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <main className="w-screen">
      <div className="bg-[#5E50A1] w-full h-[24vw]" />
      <div className="bg-[#F6F7F8] px-6 sm:px-20 lg:px-32  relative h-[250dvh] md:h-[100vw] lg:h-[75vw] ">
        <div className="w-[87vw]  h-full absolute -mt-[10vw] sm:-mt-[19vw] flex flex-wrap sm:flex-nowrap gap-12">
          {/* <SideEditCompany /> */}
          <section className="w-[100%] sm:w-[30%]">
            <article className="bg-white rounded-md">
              <div className="px-3 lg:px-10 py-8">
                <div className="grid justify-center gap-4">
                  <div className="relative w-[10vw] h-[10vw] mx-auto">
                    {profile.photo ? (
                      <Image
                        src={profile.photo}
                        // src="/assets/images/avatar1.png"
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
                      onChange=""
                      className="absolute opacity-0 w-[10vw] "
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <h4 className="text-2xl font-semibold mt-10">
                    {profile.name}
                  </h4>

                  <p className="mt-2">{profile.position}</p>
                  <p className="mt-2">{profile.company}</p>

                  <h6 className="flex  items-center gap-2 mt-3 text-gray-400">
                    <FaMapPin className="w-[1vw] h-[1vw]" />
                    {profile.city}
                  </h6>
                </div>
              </div>
            </article>

            <div>
              <button
                onClick={() => updateRecruiter()}
                className="mt-7 rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90"
              >
                Simpan
              </button>

              <button
                onClick={() => router.push("/profile/company")}
                type="button"
                className="mt-4 rounded border-[#5E50A1] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#5E50A1] shadow-sm hover:bg-gray-200"
              >
                Batal
              </button>
            </div>
          </section>
          {/* <EditCompanySection /> */}
          <section className="w-full sm:w-[55%] xl:w-[80%] ">
            <form>
              <article className="bg-white rounded-lg pb-12">
                <h1 className="pt-5 px-7 text-xl font-semibold ">Data diri</h1>
                <div className="w-full bg-gray-300 h-[1px] mt-3"></div>

                <div className="px-7 mt-5">
                  {/* <div>
                    <label className="block text-sm font-medium leading-6 text-gray-400">
                      Nama
                    </label>

                    <input
                      name="name"
                      type="text"
                      onChange={(e) =>
                        setRecruiter({ ...recruiter, name: e.target.value })
                      }
                      value={recruiter.name}
                      required
                      placeholder="Masukan nama"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div> */}

                  <div className="mt-5">
                    <label className="block text-sm font-medium leading-6 text-gray-400">
                      Nama Perusahaan
                    </label>

                    <input
                      name="company"
                      type="text"
                      onChange={(e) =>
                        setRecruiter({ ...recruiter, company: e.target.value })
                      }
                      value={recruiter.company}
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
                      name="position"
                      type="text"
                      onChange={(e) =>
                        setRecruiter({ ...recruiter, position: e.target.value })
                      }
                      value={recruiter.position}
                      placeholder="Masukan bidang perusahaan ex : Financial"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-medium leading-6 text-gray-400">
                      Kota
                    </label>

                    <input
                      name="city"
                      type="text"
                      onChange={(e) =>
                        setRecruiter({ ...recruiter, city: e.target.value })
                      }
                      value={recruiter.city}
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
                      onChange={(e) =>
                        setRecruiter({
                          ...recruiter,
                          description: e.target.value,
                        })
                      }
                      value={recruiter.description}
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
                      onChange={(e) =>
                        setRecruiter({ ...recruiter, email: e.target.value })
                      }
                      value={recruiter.email}
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
                      onChange={(e) =>
                        setRecruiter({
                          ...recruiter,
                          instagram: e.target.value,
                        })
                      }
                      value={recruiter.instagram}
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
                      onChange={(e) =>
                        setRecruiter({ ...recruiter, phone: e.target.value })
                      }
                      value={recruiter.phone}
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
                      onChange={(e) =>
                        setRecruiter({ ...recruiter, linkedin: e.target.value })
                      }
                      value={recruiter.linkedin}
                      placeholder="Masukan nama Linkedin"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </article>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default EditCompany;
