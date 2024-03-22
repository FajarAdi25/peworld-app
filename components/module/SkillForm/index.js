"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SkillForm = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const getSkills = async () => {
    const response = await axios.get("/v1/skills");
    setSkills(response.data.data);
    // console.log(response.data.data);
  };

  const addSkill = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/v1/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token};path=/;expires=Session`,
        },
        credentials: "include",
        body: JSON.stringify({ skill_name: skill }),
      });
      const data = response.json();
      getSkills();
      setSkill("");
      return data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Add Skill Failed",
      });
    }
  };

  useEffect(() => {
    getSkills();
  }, []);
  return (
    <article className="bg-white rounded-lg pb-10 mt-7">
      <h1 className="pt-5 px-7 text-xl font-semibold ">Skill</h1>
      <div className="w-full bg-gray-300 h-[1px] mt-3" />
      <div className="flex gap-3 px-7 mt-7 mb-3">
        <input
          name="skill"
          onChange={(e) => setSkill(e.target.value)}
          value={skill}
          type="text"
          required
          placeholder="Java"
          className="block w-11/12 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <button
          type="submit"
          onClick={addSkill}
          className="flex w-2.5/12  justify-center rounded-md bg-[#FBB017] px-3 pt-2 pb-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Simpan
        </button>
      </div>
      {skills?.map((item) => (
        <span
          key={item.id}
          className="ml-3 py-1 px-4 bg-[#fbb01799] border border-[#FBB017] rounded"
        >
          {item.skill_name}
        </span>
      ))}
    </article>
  );
};

export default SkillForm;
