"use server";
import { url } from "@/helpers/url";
import getCookie from "./geCookie";
// import { cookies } from "next/headers";
export const getRecruiter = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/recruiters/profile`, {
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
export const editRecruiter = async (form) => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/recruiters/profile`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      method: "PUT",
      body: JSON.stringify(form),
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
