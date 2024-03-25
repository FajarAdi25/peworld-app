"use client";
import HireSection from "@/components/module/HireSection";
import SideHire from "@/components/module/SideHire";
import { url } from "@/helpers/url";
import { getSkillsDetailWorker } from "@/services/skill";
import { getDetailWorkers } from "@/services/worker";
import axios from "axios";
import { useEffect, useState } from "react";

const Hire = ({ params: { id } }) => {
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);

  const getWorker = async () => {
    try {
      const response = await getDetailWorkers(id);
      setUser(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getSkills = async () => {
    try {
      const response = await getSkillsDetailWorker(id);
      setSkills(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(user);
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
