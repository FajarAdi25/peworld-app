import Link from "next/link";
import React from "react";
import { Tabs, Tab } from "@/components/base/TabBar";
import RegisterFormForCompany from "@/components/module/RegisterForm/Company";
import RegisterFormForWorker from "@/components/module/RegisterForm/Worker";

const Register = () => {
  return (
    <section>
      <div className="h-full sm:w-full sm:h-full sm:relative absolute pr-5 sm:pr-0 mt-2">
        <h3 className="text-2xl font-semibold">Halo, Pewpeople</h3>

        <p className="mt-2 text-sm ">
          Portal pencarian kerja untuk para Perekrut dan Pekerja. Ayo mulai!
        </p>
        {/* <LoginForm /> */}
        <div>
          <Tabs>
            <Tab label="Company">
              <div className="py-4">
                <RegisterFormForCompany />
              </div>
            </Tab>
            <Tab label="Worker">
              <div className="py-4">
                <RegisterFormForWorker />
              </div>
            </Tab>
          </Tabs>
        </div>

        <p className="text-center mt-6">
          Anda sudah punya akun?{" "}
          <Link
            href="/auth/login"
            className="text-[#FBB017] hover:text-[#FBB017]/60"
          >
            Masuk disini
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
