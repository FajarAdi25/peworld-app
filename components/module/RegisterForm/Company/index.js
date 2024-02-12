"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { registerRecruiters } from "@/services/auth";

const RegisterFormForCompany = () => {
  const router = useRouter();
  const registerUser = async (formData) => {
    try {
      await registerRecruiters(formData);
      router.push("/auth/login");
    } catch (error) {
      alert(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required field"),
      email: yup.string().required("Email is required field").email(),
      company: yup.string().required("Company is required field"),
      position: yup.string().required("Position is required field"),
      phone: yup.number().required("Phone is required field"),
      password: yup
        .string()
        .required("Password is required field")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
          "Passwords must contain uppercase, lowercase, numbers and special characters"
        ),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required field"),
    }),
  });

  const handleChange = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-400">
          Nama
        </label>

        <input
          name="name"
          type="text"
          onChange={handleChange}
          required
          placeholder="Masukan nama panjang"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small text-red-600">
          {formik.errors.name}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium leading-6 text-gray-400">
          Email
        </label>

        <input
          name="email"
          type="text"
          onChange={handleChange}
          required
          placeholder="Masukan alamat email"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small text-red-600">
          {formik.errors.email}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium leading-6 text-gray-400">
          Perushaan
        </label>

        <input
          name="company"
          type="text"
          onChange={handleChange}
          required
          placeholder="Masukan nama perushaaan"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small text-red-600">
          {formik.errors.company}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium leading-6 text-gray-400">
          Jabatan
        </label>

        <input
          name="position"
          type="text"
          onChange={handleChange}
          required
          placeholder="Masukan nama jabatan"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small text-red-600">
          {formik.errors.position}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium leading-6 text-gray-400">
          No handphone
        </label>

        <input
          name="phone"
          type="text"
          onChange={handleChange}
          required
          placeholder="Masukan no handphone"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small text-red-600">
          {formik.errors.phone}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium leading-6 text-gray-400">
          Kata Sandi
        </label>

        <input
          name="password"
          type="password"
          onChange={handleChange}
          autoComplete="current-password"
          required
          placeholder="Masukan kata sandi"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small text-red-600">
          {formik.errors.password}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium leading-6 text-gray-400">
          konfirmasi Kata Sandi
        </label>

        <input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          autoComplete="current-password"
          required
          placeholder="Masukan konfirmasi kata sandi"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small text-red-600">
          {formik.errors.confirmPassword}
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full mt-10 justify-center rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Daftar
      </button>
    </form>
  );
};

export default RegisterFormForCompany;
