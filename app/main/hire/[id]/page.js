"use client";
import HireSection from "@/components/module/HireSection";
import SideHire from "@/components/module/SideHire";
import { url } from "@/helpers/url";
import axios from "axios";
import { useEffect, useState } from "react";

const Hire = ({ params: { id } }) => {
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);

  const getWorker = async () => {
    const result = await axios.get(`${url}/v1/workers/${id}`);
    setUser(result.data.data);
  };
  const getSkills = async () => {
    try {
      const result = await axios.get(`${url}/v1/skills/${id}`);
      setSkills(result.data.data);
    } catch (err) {
      throw new Error(err);
    }
  };
  console.log(user);
  useEffect(() => {
    getWorker();
    getSkills();
  }, []);
  return (
    <main className="w-screen flex flex-wrap sm:flex-nowrap justify-center px-8 pt-12 pb-20 bg-[#F6F7F8]">
      <SideHire user={user} skills={skills} />
      <HireSection user={user} />
    </main>
  );
};

export default Hire;
