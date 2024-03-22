"use client";
import { url } from "@/helpers/url";
import { addAsset } from "@/services/asset";
import { addPortfolio } from "@/services/portfolio";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaImage, FaServer } from "react-icons/fa";
import Swal from "sweetalert2";

const PortfolioForm = () => {
  const router = useRouter();
  const [showImage, setShowImage] = useState(null);
  const [saveImage, setSaveImage] = useState("");
  const [form, setForm] = useState({
    application_name: "",
    link_repository: "",
    application: "",
    image: "",
  });
  const changeImage = async (e) => {
    const file = e.target.files[0];
    setShowImage(URL.createObjectURL(file));
    setSaveImage(file);
  };

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const submitPortofolio = async (e) => {
    // const token = localStorage.getItem("token");
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", saveImage);
      const asset = await addAsset(formData);
      setForm((current) => ({
        ...current,
        image: asset,
      }));
      await addPortfolio(form);
      Swal.fire({
        icon: "success",
        title: "Add Portfolio Successful",
      });
      router.push("/profile/worker");
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Add Portfolio Failed",
      });
    }
  };
  console.log(form);
  return (
    <article className="bg-white rounded-lg pb-10 mt-8">
      <h1 className="pt-5 px-7 text-xl font-semibold ">Portofolio</h1>
      <div className="w-full bg-gray-300 h-[1px] mt-3"></div>

      <div className="px-7 mt-5 ">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Nama aplikasi
          </label>

          <input
            id="application_name"
            name="application_name"
            value={form.application_name}
            onChange={handleChange}
            type="text"
            required
            placeholder="Masukan nama aplikasi"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Link repository
          </label>

          <input
            id="link_repository"
            name="link_repository"
            value={form.link_repository}
            onChange={handleChange}
            type="text"
            required
            placeholder="Masukan link repository"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Type portofolio
          </label>

          <div className="flex gap-4">
            <div className="border-[1.5px] border-gray-200 px-5 py-3 rounded-md">
              <input
                type="radio"
                name="application"
                value="mobile"
                onChange={handleChange}
                checked={form.application === "mobile"}
                className="mr-2  checked:bg-red-500 checked:text-red-500 "
              />
              <label className="text-gray-900">Aplikasi mobile</label>
            </div>

            <div className="border-[1.5px] border-gray-200 px-5 py-3 rounded-md">
              <input
                type="radio"
                name="application"
                value="web"
                onChange={handleChange}
                checked={form.application === "web"}
                className="mr-2  checked:bg-red-500 checked:text-red-500"
              />
              <label className="text-gray-900">Aplikasi web</label>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium leading-6 text-gray-400">
            Upload gambar
          </label>

          <div className="border-[2px] border-dashed mt-1 rounded-md relative hover:bg-gray-50">
            <div className="absolute w-full text-center text-sm ">
              <div className="relative w-[10vw] h-[10vw] mx-auto">
                <Image src="/assets/icons/cloud-arrow-up.svg" alt="" fill />
              </div>
              <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
              <p className="text-xs mt-2">
                Atau cari untuk mengupload file dari direktorimu.
              </p>
              <div className="flex gap-4 justify-center mt-6">
                <div className="flex justify-end items-center gap-1">
                  <FaImage className="w-[3vw] h-[3vw] text-gray-400" />
                  <p className="w-6/12">High-Res Image PNG, JPG or GIF</p>
                </div>
                <div className="flex justify-start items-center gap-3 text-left">
                  <div className="flex justify-end items-center gap-1">
                    <FaServer className="w-[3vw] h-[3vw] text-gray-400" />
                  </div>
                  <p className="w-6/12">Size 1080x1920 or 600x800</p>
                </div>
              </div>
            </div>

            {showImage && (
              <div className="bg-gray-300 w-full h-full absolute">
                <Image
                  src={showImage ?? ""}
                  alt=""
                  fill
                  className="absolute w-full h-full object-contain"
                />
              </div>
            )}

            <input
              name="image"
              type="file"
              onChange={changeImage}
              className="w-full h-[22vw] opacity-0 px-3 py-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="my-8 h-[1px] w-full bg-slate-200"></div>

        <button
          onClick={submitPortofolio}
          className="rounded border-[#FBB017] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#FBB017] shadow-sm hover:bg-[#FBB017] hover:text-white"
        >
          Tambah portofolio
        </button>
      </div>
    </article>
  );
};

export default PortfolioForm;
