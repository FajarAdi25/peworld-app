"use server";
import { url } from "@/helpers/url";
import getCookie from "./geCookie";
// import { cookies } from "next/headers";
// const getCookie = async (name) => {
//   return cookies().get(name)?.value ?? "";
// };

// export const addSkill = async (val) => {
//   try {
//     const response = await fetch("/v1/skills", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify({ skill_name: val }),
//     });
//     const data = response.json();
//     return data;
//   } catch (error) {
//     return Promise.reject(error.message);
//   }
// };

export const getSkills = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/skills`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getSkillsDetailWorker = async (id) => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/skills/${id}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
