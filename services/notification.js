"use server";
import { url } from "@/helpers/url";
import getCookie from "./geCookie";
export const getHireCompany = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/hire/recruiters`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      method: "GET",
      // body: JSON.stringify(form),
      credentials: "include",
      cache: "no-cache",
    });
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getHireWorker = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/hire/workers`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      method: "GET",
      // body: JSON.stringify(form),
      credentials: "include",
      cache: "no-cache",
    });
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
