import { url } from "@/helpers/url";
import { cookies } from "next/headers";
const getCookie = async (name) => {
  return cookies().get(name)?.value ?? "";
};
const token = await getCookie("token");

export const getWorkers = async () => {
  if (!token) return redirect("/login/worker");

  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/workers/`, {
      headers: {
        "Content-Type": "application/json",
        // ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
        Cookie: `token=${token};path=/;expires=Session`,
      },
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getProfile = async () => {
  if (!token) return redirect("/login/worker");

  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/workers/profile`, {
      headers: {
        "Content-Type": "application/json",
        // ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
        Cookie: `token=${token};path=/;expires=Session`,
      },
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getDetailWorkers = async (id) => {
  if (!token) return redirect("/login/worker");

  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/workers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
        Cookie: `token=${token};path=/;expires=Session`,
      },
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
