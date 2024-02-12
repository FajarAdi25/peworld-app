"use client";
import { login } from "@/services/auth";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const LoginForm = () => {
  const router = useRouter();
  const loginUser = async (formData) => {
    try {
      await login(formData);
      router.push("/main/home");
    } catch (error) {
      alert(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginUser,
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
          "Passwords must contain uppercase, lowercase, numbers and special characters"
        ),
    }),
  });

  const handleChange = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };
  return (
    <form onSubmit={formik.handleSubmit} className="mt-5">
      <div className="mt-5">
        <label className="block text-sm font-medium leading-6 text-gray-400">
          Email
        </label>

        <input
          type="text"
          name="email"
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
          Kata Sandi
        </label>

        <input
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete="current-password"
          required
          placeholder="Masukan kata sandi"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="error-message text-sm font-small leading-6 text-red-600">
          {formik.errors.password}
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full mt-16 justify-center rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Masuk
      </button>
    </form>
  );
};

export default LoginForm;
