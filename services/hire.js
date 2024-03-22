"use server";
import { url } from "@/helpers/url";
import getCookie from "./geCookie";

export const hireWorker = async (form) => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/hire`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      method: "POST",
      body: JSON.stringify(form),
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
