import React from "react";
import Link from "next/link";
import LoginForm from "@/components/module/LoginForm";

const Login = () => {
  return (
    <section>
      <div className="h-full sm:w-full sm:h-full sm:relative absolute pr-5 sm:pr-0 mt-24">
        <h3 className="text-2xl font-semibold">Halo, Pewpeople</h3>

        <p className="mt-2 text-sm ">
          Portal pencarian kerja untuk para Perekrut dan Pekerja. Ayo mulai!
        </p>
        <LoginForm />
        <p className="text-center mt-6">
          Anda belum punya akun?{" "}
          <Link
            href="/auth/register"
            className="text-[#FBB017] hover:text-[#FBB017]/60"
          >
            Daftar disini
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
